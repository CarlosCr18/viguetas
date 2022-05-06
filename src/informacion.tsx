import React from "react";

export interface TipoDeBovedilla {
  nombre: string;
  material: string;
  alto: number;
  ancho: number;
  largo: number;
  efectivo: number;
  url: string;
}
export type Props = {
  cantidadDeViguetas: number;
  ancho: number;
  largo: number;
  tipoDeBovedilla: TipoDeBovedilla;
  inicial: boolean;
  largoDeVigueta: number;
  cantidadDeHileras: number;
};

const Informacion: React.FC<Props> = ({
  cantidadDeViguetas,
  ancho,
  largo,
  tipoDeBovedilla: TipoDeBovedilla,
  inicial = false,
  largoDeVigueta,
  cantidadDeHileras,
}) => {
  const malla: number = ((ancho + 30) / 100) * ((largo + 30) / 100);
  /*
  const cantidadDeBovedillas: number = bovedillaDeConcreto
    ? (area - cantidadDeViguetas * 12 * largo) / (58 * 300)
    : (area - cantidadDeViguetas * 12 * largo) / (78 * 150);*/
  const cantidadDeBovedillas: number =
    (largoDeVigueta / TipoDeBovedilla.largo) * cantidadDeHileras;
  const distanciaEntreUltimaViguetaYMuro: number = inicial
    ? ancho - 12 - cantidadDeViguetas * (TipoDeBovedilla.efectivo + 12)
    : ancho - cantidadDeViguetas * (TipoDeBovedilla.efectivo + 12);

  return (
    <div className="InformacionContainer">
      <h2>Presupuesto del proyecto</h2>
      <div className="InformacionMaterialContainer">
        <h3>Viguetas</h3>
        <p>
          {inicial
            ? cantidadDeViguetas +
              1 +
              " piezas de " +
              largoDeVigueta / 100 +
              "m"
            : cantidadDeViguetas + " piezas de " + largoDeVigueta / 100 + "m"}
        </p>
        <p>
          Distancia entre ultima vigueta y muro:{" "}
          {distanciaEntreUltimaViguetaYMuro + "cms"}
        </p>
      </div>
      <div className="InformacionMaterialContainer">
        <h3>Bovedillas</h3>
        <p> Cantidad de hileras: {cantidadDeHileras}</p>
        <p>
          {cantidadDeBovedillas.toFixed(2) +
            " Piezas de " +
            TipoDeBovedilla.nombre}
        </p>
      </div>
      <div className="InformacionMaterialContainer">
        <h3>Malla</h3>
        <p>{"Area: " + malla + " m^2"}</p>
        <p>{"Cantidad: " + (malla * 1.1).toFixed(2) + " m^2"}</p>
      </div>
    </div>
  );
};

export default Informacion;
