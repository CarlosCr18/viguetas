import React from "react";
import { Button } from "react-bootstrap";
import html2canvas from "html2canvas";

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
            ↖
          </Button>
          <Button
            variant="outline-success"
            size="lg"
            onClick={() => {
              setValorY(valorY - 10);
            }}
          >
            ⬆
          </Button>
          <Button
            variant="outline-success"
            size="lg"
            onClick={() => {
              setValorY(valorY - 10);
              setValorX(valorX + 10);
            }}
          >
            ↗
          </Button>
          <Button
            variant="outline-success"
            size="lg"
            onClick={() => {
              setValorX(valorX - 10);
            }}
          >
            ⬅
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
            ➡
          </Button>
          <Button
            variant="outline-success"
            size="lg"
            onClick={() => {
              setValorY(valorY + 10);
              setValorX(valorX - 10);
            }}
          >
            ↙
          </Button>
          <Button
            variant="outline-success"
            size="lg"
            onClick={() => {
              setValorY(valorY + 10);
            }}
          >
            ⬇
          </Button>
          <Button
            variant="outline-success"
            size="lg"
            onClick={() => {
              setValorY(valorY + 10);
              setValorX(valorX + 10);
            }}
          >
            ↘
          </Button>
        </div>
      </div>
      <Button
        onClick={() => {
          const input: any = document.getElementById("plano");

          html2canvas(input).then((canvas) => {
            document.body.appendChild(canvas);
            //saveAs(canvas.toDataURL(), "file-name.png");
          });
        }}
      >
        Guardar plano
      </Button>
    </div>
  );
};

export function saveAs(uri: any, filename: any) {
  var link = document.createElement("a");

  if (typeof link.download === "string") {
    link.href = uri;
    link.download = filename;

    //Firefox requires the link to be in the body
    document.body.appendChild(link);

    //simulate click
    link.click();

    //remove the link when done
    document.body.removeChild(link);
  } else {
    window.open(uri);
  }
}

export default ControlesDePlano;
