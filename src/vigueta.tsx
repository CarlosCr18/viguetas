import React from "react";
import "./App.css";

export interface TipoDeBovedilla {
  nombre: string;
  material: string;
  alto: number;
  ancho: number;
  largo: number;
  efectivo: number;
}

export type Props = {
  ancho: number;
  largo: number;
  tipoDeBovedilla: TipoDeBovedilla;
  inicial: boolean;
  setCantidadDeViguetas(value: number): void;
  setLargoDeViguetas(value: number): void;
};
const Vigueta: React.FC<Props> = ({
  ancho = 0,
  largo = 0,
  tipoDeBovedilla,
  inicial = false,
  setCantidadDeViguetas,
  setLargoDeViguetas,
}) => {
  const mayorLongitud: number = ancho > largo ? ancho : largo;
  const menorLongitud: number = ancho < largo ? ancho : largo;
  const distanciaEntreViguetas: number = tipoDeBovedilla.efectivo;
  const cantidadDeViguetas = inicial
    ? Math.trunc((ancho - 12) / (distanciaEntreViguetas + 12))
    : Math.trunc(ancho / (distanciaEntreViguetas + 12));
  setCantidadDeViguetas(cantidadDeViguetas);
  const largoDeVigueta: number =
    largo % 10 >= 5
      ? Math.round(largo / 10) * 10 + 10
      : Math.round(largo / 10) * 10 + 20;
  setLargoDeViguetas(largoDeVigueta);

  const margenTop: number = (largo - largoDeVigueta) / 2 - 2;
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
    marginTop: margenTop,
    fontWeight: "bold",
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
    marginTop: margenTop,
  };
  const viguetasContainerStyle = {
    width: ancho + "px",
    height: largo + "px",
    outline: "2px solid black",
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
