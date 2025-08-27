import { Canvas } from "@react-three/fiber"; // set up 3D scene
import { OrbitControls, Stars } from "@react-three/drei";
import { useState } from "react";
import Planet from "./components/Planet";
import InfoPanel from "./components/InfoPanel";
import { planets } from "./data/planets";

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  return (
    <>
      <Canvas camera={{ position: [0, 20, 40], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 0, 0]} intensity={1.5} />
        <Stars />
        <OrbitControls />
        {planets.map((planet, index) => (
          <Planet key={index} planet={planet} onClick={setSelectedPlanet} />
        ))}
      </Canvas>

      {selectedPlanet && <InfoPanel planet={selectedPlanet} />}
    </>
  );
}

export default App;
