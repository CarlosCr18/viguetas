import React from "react";
import { Form } from "react-bootstrap";

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
  tipoDeBovedilla: TipoDeBovedilla;
};
const InformacionDeBovedilla: React.FC<Props> = ({
  tipoDeBovedilla: TipoDeBovedilla,
}) => {
  const [mostrarInformacion, setMostrarInformacion] = React.useState(false);
  return (
    <div className="tipoDeBovedillaInformacion">
      <Form.Check
        checked={mostrarInformacion}
        label={<strong>Informacion de Bovedilla</strong>}
        type="switch"
        id="tipoDeBovedillaInformacionShow"
        onChange={({ target }) => {
          setMostrarInformacion(target.checked);
        }}
      />
      <p> </p>
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
          <img src={TipoDeBovedilla.url} alt="imagen de bovedilla"></img>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default InformacionDeBovedilla;
