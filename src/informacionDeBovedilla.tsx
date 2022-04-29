import React from "react";

export interface TipoDeBovedilla {
  nombre: string;
  material: string;
  alto: number;
  ancho: number;
  largo: number;
  efectivo: number;
}
export type Props = {
  tipoDeBovedilla: TipoDeBovedilla;
};
const InformacionDeBovedilla: React.FC<Props> = ({
  tipoDeBovedilla: TipoDeBovedilla,
}) => {
  const [mostrarInformacion, setMostrarInformacion] = React.useState(true);
  return (
    <div className="tipoDeBovedillaInformacion">
      <h2>Informacion de Bovedilla</h2>
      <label htmlFor="tipoDeBovedillaInformacionShow">
        {mostrarInformacion ? (
          <strong>Ocultar informacion</strong>
        ) : (
          <strong>Mostrar informacion</strong>
        )}
        <input
          checked={mostrarInformacion}
          type="checkbox"
          id="tipoDeBovedillaInformacionShow"
          onChange={({ target }) => {
            setMostrarInformacion(target.checked);
          }}
        />
      </label>
      {mostrarInformacion ? (
        <>
          <p>
            <strong>Nombre: </strong>
            {TipoDeBovedilla.nombre}
          </p>
          <p>
            <strong>Material: </strong>
            {TipoDeBovedilla.material}
          </p>
          <p>
            <strong>Alto: </strong>
            {TipoDeBovedilla.alto} cm
          </p>
          <p>
            <strong>Ancho: </strong>
            {TipoDeBovedilla.ancho} cm
          </p>
          <p>
            <strong>Largo: </strong>
            {TipoDeBovedilla.largo} cm
          </p>
          <p>
            <strong>Efectivo: </strong>
            {TipoDeBovedilla.efectivo} cm
          </p>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default InformacionDeBovedilla;
