function InfoPanel({ planet }) {
  return (
    <div style={{
      position: 'absolute',
      top: 20,
      left: 20,
      background: 'rgba(0,0,0,0.7)',
      color: 'white',
      padding: '1rem',
      borderRadius: '10px',
      maxWidth: '300px'
    }}>
      <h2>{planet.name}</h2>
      <p>{planet.description}</p>
    </div>
  );
}

export default InfoPanel;
