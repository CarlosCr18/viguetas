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
  const largoDeVigueta: number =
    largo % 10 > 5
      ? Math.round(largo / 10) * 10 + 10
      : Math.round(largo / 10) * 10 + 20;
  const viguetaStyle = {
    width: "12px",
    "min-width": "12px",
    "max-width": "12px",

    height: largoDeVigueta + "px",
    outline: "2px solid red",
    display: "grid",
    placeItems: "center",
    fontSize: "14px",
    marginLeft: distanciaEntreViguetas + "px",
    marginTop: "-8px",
    paddingLeft: "12px",
  };
  const viguetaInicial = {
    width: "12px",
    "min-width": "12px",
    "max-width": "12px",

    height: largoDeVigueta + "px",
    outline: "2px solid red",
    display: "grid",
    placeItems: "center",
    fontSize: "14px",
    marginLeft: 0 + "px",
    marginTop: "-8px",
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
        {largoDeVigueta / 100 + " m"}
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
      <div className="largoDeMedida">{largo / 100 + "m"}</div>
      <div className="muroExterior"> </div>
      <div className="anchoDeMedida">{ancho / 100 + "m"}</div>
      {inicial ? <div style={viguetaInicial}>{}</div> : <></>}
      {arrayDeViguetas.map((element: any) => element)}
    </div>
  );
};

export default Vigueta;
