import React from "react";

const Nosotros = ({ cantidad }) => {
  const boxRef = React.useRef(null);

  const cambiarColor = () => {
    boxRef.current.style.backgroundColor = "lightblue"; // Modificamos el estilo del div
  };

  return (
    <div>
      <h1>{cantidad}</h1>
      <div
        ref={boxRef}
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: "lightgray",
        }}
      />
      <button onClick={cambiarColor}>Cambiar color</button>
    </div>
  );
};

export default Nosotros;
