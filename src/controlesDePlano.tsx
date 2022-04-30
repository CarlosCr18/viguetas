import React from "react";
import { Button } from "react-bootstrap";

const ControlesDePlano: React.FC = () => {
  const [valorX, setValorX] = React.useState(0);
  const [valorY, setValorY] = React.useState(0);

  document.documentElement.style.setProperty(`--top`, valorX + "%");
  document.documentElement.style.setProperty(`--izquierda`, valorY + "%");

  return (
    <div className="controlesDePlano">
      <h3>Mover el plano</h3>
      <div className="controlesDePlanoContainer">
        <div className="sliderContainer">
          <label htmlFor="slider">Cambiar zoom </label>
          <input
            id="slider"
            type="range"
            min="30"
            max="200"
            onChange={({ target }) => {
              document.documentElement.style.setProperty(
                `--escala`,
                "" + parseInt(target.value) / 100
              );
            }}
          ></input>
        </div>
        <div className="botonesContainer">
          <Button
            variant="outline-success"
            size="lg"
            onClick={() => {
              setValorY(valorY - 10);
              setValorX(valorX - 10);
            }}
          >
            🢄
          </Button>
          <Button
            variant="outline-success"
            size="lg"
            onClick={() => {
              setValorY(valorY - 10);
            }}
          >
            🢁
          </Button>
          <Button
            variant="outline-success"
            size="lg"
            onClick={() => {
              setValorY(valorY - 10);
              setValorX(valorX + 10);
            }}
          >
            🢅
          </Button>
          <Button
            variant="outline-success"
            size="lg"
            onClick={() => {
              setValorX(valorX - 10);
            }}
          >
            🢀
          </Button>
          <Button className="bg-success" variant="secondary" size="lg" disabled>
            {" "}
          </Button>
          <Button
            variant="outline-success"
            size="lg"
            onClick={() => {
              setValorX(valorX + 10);
            }}
          >
            🢂
          </Button>
          <Button
            variant="outline-success"
            size="lg"
            onClick={() => {
              setValorY(valorY + 10);
              setValorX(valorX - 10);
            }}
          >
            🢇
          </Button>
          <Button
            variant="outline-success"
            size="lg"
            onClick={() => {
              setValorY(valorY + 10);
            }}
          >
            🢃
          </Button>
          <Button
            variant="outline-success"
            size="lg"
            onClick={() => {
              setValorY(valorY + 10);
              setValorX(valorX + 10);
            }}
          >
            🢆
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ControlesDePlano;
