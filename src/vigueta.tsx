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

  document.documentElement.style.setProperty(`--margenTop`, margenTop + "px");
  document.documentElement.style.setProperty(
    `--largoDeVigueta`,
    largoDeVigueta + "px"
  );
  document.documentElement.style.setProperty(
    `--distanciaEntreViguetas`,
    distanciaEntreViguetas + "px"
  );
  document.documentElement.style.setProperty(
    `--vigueta-container-ancho`,
    ancho + "px"
  );
  document.documentElement.style.setProperty(
    `--vigueta-container-largo`,
    largo + "px"
  );

  // const viguetaStyle = {
  //   width: "12px",
  //   "min-width": "12px",
  //   "max-width": "12px",

  //   height: largoDeVigueta + "px",
  //   outline: "2px solid red",
  //   display: "grid",
  //   placeItems: "center",
  //   fontSize: "14px",
  //   marginLeft: distanciaEntreViguetas + "px",
  //   marginTop: margenTop,
  //   fontWeight: "bold",
  // };

  // const viguetaInicial = {
  //   width: "12px",
  //   "min-width": "12px",
  //   "max-width": "12px",
  //   height: largoDeVigueta + "px",
  //   outline: "2px solid red",
  //   display: "grid",
  //   placeItems: "center",
  //   fontSize: "14px",
  //   marginLeft: 0 + "px",
  //   marginTop: margenTop,
  // };

  // const viguetasContainerStyle = {
  //   width: ancho + "px",
  //   height: largo + "px",
  //   outline: "2px solid black",
  // };

  let arrayDeViguetas: Array<JSX.Element> = [];
  for (let i = 0; i < cantidadDeViguetas; i++) {
    arrayDeViguetas[i] = (
      <div className="viguetasComunes" key={i + "Vigueta"}>
        {largoDeVigueta / 100 + " m"}
      </div>
    );
  }

  return (
    <div className="viguetasContainer">
      <div className="largoDeMedida">{largo / 100 + "m"}</div>
      <div className="muroExterior">{}</div>
      <div className="anchoDeMedida">{ancho / 100 + "m"}</div>
      {inicial ? <div className="viguetaInicial">{}</div> : <></>}
      {arrayDeViguetas.map((element: JSX.Element) => element)}
    </div>
  );
};

export default Vigueta;
