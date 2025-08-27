import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber"; //hooks to manage 3D objects
import { TextureLoader } from "three";

function Planet({ planet, onClick }) {
  const mesh = useRef();
  const texture = useLoader(TextureLoader, planet.texture);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // Orbit
    mesh.current.position.x = Math.cos(t * planet.orbitSpeed) * planet.distance;
    mesh.current.position.z = Math.sin(t * planet.orbitSpeed) * planet.distance;
    // Rotation
    mesh.current.rotation.y += planet.rotationSpeed;
  });

  return (
    <mesh ref={mesh} onClick={() => onClick(planet)}>
      <sphereGeometry args={[planet.radius, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default Planet;
