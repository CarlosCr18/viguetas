import React from "react";
import "./App.css";
import Form from "react-bootstrap/Form";

export type Props = {
  setAncho(value: number): void;
  setLargo(value: number): void;
  setConcreto(value: boolean): void;
  setInicial(value: boolean): void;
};

const FormDeViguetas: React.FC<Props> = ({
  setAncho,
  setLargo,
  setConcreto,
  setInicial,
}) => {
  return (
    <Form className="inputsContainer">
      <div className="inputsDiv">
        <Form.Label>Ancho</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ancho"
          onChange={({ target }) => {
            setAncho(parseInt(target.value));
          }}
        ></Form.Control>
      </div>
      <div className="inputsDiv">
        <Form.Label>Largo</Form.Label>
        <Form.Control
          type="number"
          placeholder="Largo"
          onChange={({ target }) => {
            setLargo(parseInt(target.value));
          }}
        ></Form.Control>
      </div>
      <Form.Check
        id="tipoDeBovedilla"
        type="checkbox"
        label=" Bovedilla concreto"
        onChange={({ target }) => {
          setConcreto(target.checked);
        }}
      />
      <Form.Check
        id="viguetaInicial"
        type="checkbox"
        label=" Vigueta inicial"
        onChange={({ target }) => {
          setInicial(target.checked);
        }}
      />
    </Form>
  );
};

export default FormDeViguetas;
