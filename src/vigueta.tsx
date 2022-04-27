import React from "react";
import "./App.css";

export type Props = {
  ancho: number;
  largo: number;
  concreto: boolean;
  inicial: boolean;
  setCantidadDeViguetas(value: number): void;
};
const Vigueta: React.FC<Props> = ({
  ancho = 0,
  largo = 0,
  concreto = false,
  inicial = false,
  setCantidadDeViguetas,
}) => {
  const mayorLongitud: number = ancho > largo ? ancho : largo;
  const menorLongitud: number = ancho < largo ? ancho : largo;
  const distanciaEntreViguetas = concreto ? 58 : 78;
  const cantidadDeViguetas = inicial
    ? Math.trunc((ancho - 12) / (distanciaEntreViguetas + 12))
    : Math.trunc(ancho / (distanciaEntreViguetas + 12));
  setCantidadDeViguetas(cantidadDeViguetas);

  const viguetaStyle = {
    width: "12px",
    "min-width": "12px",
    "max-width": "12px",

    height: largo + "px",
    outline: "2px solid red",
    display: "grid",
    placeItems: "center",
    fontSize: "14px",
    marginLeft: distanciaEntreViguetas + "px",
  };
  const viguetaInicial = {
    width: "12px",
    "min-width": "12px",
    "max-width": "12px",

    height: largo + "px",
    outline: "2px solid red",
    display: "grid",
    placeItems: "center",
    fontSize: "14px",
    marginLeft: 0 + "px",
  };
  const viguetasContainerStyle = {
    width: ancho + "px",
    height: largo + "px",
    border: "2px solid black",
    margin: "2rem",
    display: "flex",
  };

  let arrayDeViguetas: any = [];
  for (let i = 0; i < cantidadDeViguetas; i++) {
    arrayDeViguetas[i] = (
      <div className="vigueta" key={i + "Vigueta"} style={viguetaStyle}>
        {Math.round(largo / 10) * 10}
      </div>
    );
  }

  console.log(
    { mayorLongitud },
    { menorLongitud },
    { distanciaEntreViguetas },
    { cantidadDeViguetas }
  );

  return (
    <div className="viguetasContainer" style={viguetasContainerStyle}>
      {inicial ? (
        <div style={viguetaInicial}>{Math.round(largo / 10) * 10}</div>
      ) : (
        <></>
      )}
      {arrayDeViguetas.map((element: any) => element)}
    </div>
  );
};

export default Vigueta;
