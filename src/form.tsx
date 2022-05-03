import React from "react";
import "./App.css";
import Form from "react-bootstrap/Form";

export type Props = {
  setAncho(value: number): void;
  setLargo(value: number): void;
  setTipoDeBovedilla(value: object): void;
  setInicial(value: boolean): void;
  setCantidadDeHileras(value: number): void;
  cantidadDeViguetas: number;
};

const FormDeViguetas: React.FC<Props> = ({
  setAncho,
  setLargo,
  setTipoDeBovedilla,
  setInicial,
  setCantidadDeHileras,
  cantidadDeViguetas,
}) => {
  interface TiposDeBovedilla {
    nombre: string;
    material: string;
    alto: number;
    ancho: number;
    largo: number;
    efectivo: number;
  }
  const arrayDeTipoDeBovedilla: Array<TiposDeBovedilla> = [
    {
      nombre: "Bp90x18 78x18x150",
      material: "poliestireno",
      alto: 18,
      ancho: 82,
      largo: 150,
      efectivo: 78,
    },
    {
      nombre: "Bp90x13 13x78x150",
      material: "poliestireno",
      alto: 13,
      ancho: 82,
      largo: 150,
      efectivo: 78,
    },
    {
      nombre: "Bp70x18 18x58x300",
      material: "poliestireno",
      alto: 18,
      ancho: 62,
      largo: 300,
      efectivo: 58,
    },
    {
      nombre: "Bp70x13 13x58x300",
      material: "poliestireno",
      alto: 13,
      ancho: 62,
      largo: 300,
      efectivo: 58,
    },
    {
      nombre: "Bc90x18 18x78x24",
      material: "concreto",
      alto: 18,
      ancho: 82,
      largo: 24,
      efectivo: 78,
    },
    {
      nombre: "Bc90x13 13x78x24",
      material: "concreto",
      alto: 13,
      ancho: 82,
      largo: 24,
      efectivo: 78,
    },
    {
      nombre: "Bc70x18 18x58x24",
      material: "concreto",
      alto: 18,
      ancho: 62,
      largo: 24,
      efectivo: 58,
    },
    {
      nombre: "Bc70x13 13x58x24",
      material: "concreto",
      alto: 13,
      ancho: 62,
      largo: 24,
      efectivo: 58,
    },
  ];

  return (
    <Form>
      <h2>Dimensiones del proyecto</h2>
      <div className="inputsContainer">
        <div className="inputsDiv">
          <Form.Label className="labelInput">Lado mayor</Form.Label>
          <Form.Control
            type="number"
            placeholder="Centimetros"
            onChange={({ target }) => {
              setAncho(parseInt(target.value));
            }}
          ></Form.Control>
        </div>
        <div className="inputsDiv">
          <Form.Label className="labelInput">Lado menor</Form.Label>
          <Form.Control
            type="number"
            placeholder="Centimetros"
            onChange={({ target }) => {
              setLargo(parseInt(target.value));
            }}
          ></Form.Control>
        </div>
        <div className="inputsDiv">
          <Form.Label className="labelInput">Tipo de bovedilla</Form.Label>
          <Form.Select
            onChange={({ target }) => {
              setTipoDeBovedilla(
                arrayDeTipoDeBovedilla[parseInt(target.value)]
              );
            }}
          >
            {arrayDeTipoDeBovedilla.map((element, index) => {
              return <option value={index}>{element.nombre}</option>;
            })}
          </Form.Select>
        </div>
        <div className="inputsDiv">
          <Form.Check
            label="Sumar una hilera al presupuesto"
            id="cantidadDeHilerasCheckbox"
            type="checkbox"
            onChange={({ target }) => {
              target.checked
                ? setCantidadDeHileras(cantidadDeViguetas + 1)
                : setCantidadDeHileras(cantidadDeViguetas);
            }}
          />
        </div>
        <div className="inputsDiv">
          <Form.Check
            label="Agregar vigueta Inicial"
            id="viguetaInicial"
            type="checkbox"
            onChange={({ target }) => {
              setInicial(target.checked);
            }}
          />
        </div>
      </div>
    </Form>
  );
};

export default FormDeViguetas;
