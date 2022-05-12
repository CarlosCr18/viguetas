import React from "react";
import { Form } from "react-bootstrap";
import TablaDeInformacion from "./tablaDeInformacion";

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
  const [mostrarInformacionDelProyecto, setMostrarInformacionDelProyecto] =
    React.useState(false);
  const [mostrarTablaDeCotizacion, setMostrarTablaDeCotizacion] =
    React.useState(false);

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

  const arrayDeInformacion = [
    {
      material: "Viguetas de " + largoDeVigueta / 100 + "m",
      cantidad: inicial ? cantidadDeViguetas + 1 : cantidadDeViguetas,
      largoDeVigueta: largoDeVigueta / 100,
    },
    {
      material: TipoDeBovedilla.nombre,
      cantidad: +cantidadDeBovedillas.toFixed(2),
      largoDeVigueta: 1,
    },
    {
      material: "Malla",
      cantidad: +(malla * 1.1).toFixed(2),
      largoDeVigueta: 1,
    },
    {
      material: "Flete",
      cantidad: 1,
      largoDeVigueta: 1,
    },
    {
      material: "Utilidades",
      cantidad: 1,
      largoDeVigueta: 1,
    },
  ];

  return (
    <div className="InformacionContainer">
      <h2>Informacion del proyecto</h2>
      <Form.Check
        checked={mostrarInformacionDelProyecto}
        label={<strong>Informacion de materiales</strong>}
        type="switch"
        id="informacionDelProyecto"
        onChange={({ target }) => {
          setMostrarInformacionDelProyecto(target.checked);
        }}
      />
      {mostrarInformacionDelProyecto && (
        <>
          <div className="InformacionMaterialContainer">
            <h3>Viguetas</h3>
            <p>
              {inicial
                ? cantidadDeViguetas +
                  1 +
                  " piezas de " +
                  largoDeVigueta / 100 +
                  "m"
                : cantidadDeViguetas +
                  " piezas de " +
                  largoDeVigueta / 100 +
                  "m"}
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
        </>
      )}
      <Form.Check
        checked={mostrarTablaDeCotizacion}
        label={<strong>Tabla de cotizacion</strong>}
        type="switch"
        id="switchTablaDeCotizacion"
        onChange={({ target }) => {
          setMostrarTablaDeCotizacion(target.checked);
        }}
      />
      {mostrarTablaDeCotizacion && (
        <TablaDeInformacion arrayDeInformacion={arrayDeInformacion} />
      )}
    </div>
  );
};

export default Informacion;
