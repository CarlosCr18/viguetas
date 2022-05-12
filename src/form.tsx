import React from "react";
import "./App.css";
import Form from "react-bootstrap/Form";
import bp9018 from "./bp9018.jpg";
import bp9013 from "./bp9013.jpg";
import bp7018 from "./bp7018.jpg";
import bp7013 from "./bp7013.jpg";
import bc9018 from "./bc9018.jpg";
import bc9013 from "./bc9013.jpg";
import bc7018 from "./bc7018.jpg";
import bc7013 from "./bc7013.jpg";

export type Props = {
  setAncho(value: number): void;
  setLargo(value: number): void;
  setTipoDeBovedilla(value: object): void;
  setInicial(value: boolean): void;
  setMedidasSonInteriores(value: boolean): void;
  medidasSonInteriores: boolean;
};

const FormDeViguetas: React.FC<Props> = ({
  setAncho,
  setLargo,
  setTipoDeBovedilla,
  setInicial,
  setMedidasSonInteriores,
  medidasSonInteriores,
}) => {
  interface TiposDeBovedilla {
    nombre: string;
    material: string;
    alto: number;
    ancho: number;
    largo: number;
    efectivo: number;
    url: string;
  }
  const arrayDeTipoDeBovedilla: Array<TiposDeBovedilla> = [
    {
      nombre: "Bp90x18 78x18x150",
      material: "poliestireno",
      alto: 18,
      ancho: 82,
      largo: 150,
      efectivo: 78,
      url: bp9018,
    },
    {
      nombre: "Bp90x13 13x78x150",
      material: "poliestireno",
      alto: 13,
      ancho: 82,
      largo: 150,
      efectivo: 78,
      url: bp9013,
    },
    {
      nombre: "Bp70x18 18x58x300",
      material: "poliestireno",
      alto: 18,
      ancho: 62,
      largo: 300,
      efectivo: 58,
      url: bp7018,
    },
    {
      nombre: "Bp70x13 13x58x300",
      material: "poliestireno",
      alto: 13,
      ancho: 62,
      largo: 300,
      efectivo: 58,
      url: bp7013,
    },
    {
      nombre: "Bc90x18 18x78x24",
      material: "concreto",
      alto: 18,
      ancho: 82,
      largo: 24,
      efectivo: 78,
      url: bc9018,
    },
    {
      nombre: "Bc90x13 13x78x24",
      material: "concreto",
      alto: 13,
      ancho: 82,
      largo: 24,
      efectivo: 78,
      url: bc9013,
    },
    {
      nombre: "Bc70x18 18x58x24",
      material: "concreto",
      alto: 18,
      ancho: 62,
      largo: 24,
      efectivo: 58,
      url: bc7018,
    },
    {
      nombre: "Bc70x13 13x58x24",
      material: "concreto",
      alto: 13,
      ancho: 62,
      largo: 24,
      efectivo: 58,
      url: bc7013,
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
              return (
                <option key={element.nombre + index} value={index}>
                  {element.nombre}
                </option>
              );
            })}
          </Form.Select>
        </div>
        {/* <div className="inputsDiv">
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
        </div> */}
        <Form.Check
          label={<strong>Agregar vigueta Inicial</strong>}
          id="viguetaInicial"
          type="checkbox"
          onChange={({ target }) => {
            setInicial(target.checked);
          }}
        />
        <Form.Check
          checked={medidasSonInteriores}
          label={
            medidasSonInteriores ? (
              <strong>Las medidas son interiores</strong>
            ) : (
              <strong>Las medidas son exteriores</strong>
            )
          }
          type="switch"
          id="medidasSonInteriores"
          onChange={({ target }) => {
            setMedidasSonInteriores(target.checked);
          }}
        />
      </div>
    </Form>
  );
};

export default FormDeViguetas;
