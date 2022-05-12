import React from "react";
import { Button } from "react-bootstrap";
import html2canvas from "html2canvas";
import Form from "react-bootstrap/Form";

export type Props = {
  mostrarPlano: boolean;
  setMostrarPlano(value: boolean): void;
};
const ControlesDePlano: React.FC<Props> = ({
  mostrarPlano,
  setMostrarPlano,
}) => {
  const [valorX, setValorX] = React.useState(0);
  const [valorY, setValorY] = React.useState(0);
  const [isCanvasCreated, setIsCanvasCreated] = React.useState(false);
  const [valorDelZoom, setValorDelZoom] = React.useState(30);
  const PORCENTAJE_DE_MOVIMIENTO: number = 3;

  document.documentElement.style.setProperty(`--top`, valorX + "%");
  document.documentElement.style.setProperty(`--izquierda`, valorY + "%");

  return (
    <>
      <h3>Plano</h3>
      <Form.Check
        checked={mostrarPlano}
        label={
          mostrarPlano ? (
            <strong>Mostrando Plano</strong>
          ) : (
            <strong>Ocultando Plano</strong>
          )
        }
        type="switch"
        id="MostrarPlanoSwitch"
        onChange={({ target }) => {
          setMostrarPlano(target.checked);
        }}
      />
      {mostrarPlano && (
        <div className="controlesDePlano">
          <h3>Mover el plano</h3>
          <div className="controlesDePlanoContainer">
            <div className="sliderContainer">
              <label htmlFor="slider">Cambiar zoom </label>
              <input
                id="slider"
                type="range"
                value={valorDelZoom}
                min="30"
                max="145"
                onChange={({ target }) => {
                  document.documentElement.style.setProperty(
                    `--escala`,
                    "" + parseInt(target.value) / 100
                  );
                  setValorDelZoom(parseInt(target.value));
                }}
              ></input>
              <input
                type="number"
                value={valorDelZoom}
                min="30"
                max="145"
                onChange={({ target }) => {
                  document.documentElement.style.setProperty(
                    `--escala`,
                    "" + parseInt(target.value) / 100
                  );
                  setValorDelZoom(parseInt(target.value));
                }}
              ></input>
            </div>
            <div className="botonesContainer">
              <Button
                variant="outline-success"
                size="lg"
                onClick={() => {
                  setValorY(valorY - PORCENTAJE_DE_MOVIMIENTO);
                  setValorX(valorX - PORCENTAJE_DE_MOVIMIENTO);
                }}
              >
                ⭶
              </Button>
              <Button
                variant="outline-success"
                size="lg"
                onClick={() => {
                  setValorY(valorY - PORCENTAJE_DE_MOVIMIENTO);
                }}
              >
                ⭱
              </Button>
              <Button
                variant="outline-success"
                size="lg"
                onClick={() => {
                  setValorY(valorY - PORCENTAJE_DE_MOVIMIENTO);
                  setValorX(valorX + PORCENTAJE_DE_MOVIMIENTO);
                }}
              >
                ⭷
              </Button>
              <Button
                variant="outline-success"
                size="lg"
                onClick={() => {
                  setValorX(valorX - PORCENTAJE_DE_MOVIMIENTO);
                }}
              >
                ⭰
              </Button>
              <Button
                className="bg-success"
                variant="secondary"
                size="lg"
                disabled
              >
                {" "}
              </Button>
              <Button
                variant="outline-success"
                size="lg"
                onClick={() => {
                  setValorX(valorX + PORCENTAJE_DE_MOVIMIENTO);
                }}
              >
                ⭲
              </Button>
              <Button
                variant="outline-success"
                size="lg"
                onClick={() => {
                  setValorY(valorY + PORCENTAJE_DE_MOVIMIENTO);
                  setValorX(valorX - PORCENTAJE_DE_MOVIMIENTO);
                }}
              >
                ⭹
              </Button>
              <Button
                variant="outline-success"
                size="lg"
                onClick={() => {
                  setValorY(valorY + PORCENTAJE_DE_MOVIMIENTO);
                }}
              >
                ⭳
              </Button>
              <Button
                variant="outline-success"
                size="lg"
                onClick={() => {
                  setValorY(valorY + PORCENTAJE_DE_MOVIMIENTO);
                  setValorX(valorX + PORCENTAJE_DE_MOVIMIENTO);
                }}
              >
                ⭸
              </Button>
            </div>
          </div>
          <div className="botonesParaCrearPlano">
            <Button
              onClick={() => {
                const input: any = document.getElementById("plano");
                if (document.body.getElementsByTagName("canvas").length > 0) {
                  document.body.removeChild(
                    document.body.getElementsByTagName("canvas")[0]
                  );
                }

                html2canvas(input).then((canvas) => {
                  document.body.appendChild(canvas);
                  setIsCanvasCreated(true);
                  //saveAs(canvas.toDataURL(), "file-name.png");
                });
              }}
            >
              Crear imagen del plano
            </Button>
            {isCanvasCreated ? (
              <Button
                onClick={() => {
                  const canvas =
                    document.body.getElementsByTagName("canvas")[0];
                  const dataURL = canvas.toDataURL("image/jpeg", 1.0);
                  saveAs(dataURL, "plano.jpeg");
                  console.log(document.body.getElementsByTagName("canvas"));
                }}
              >
                Guardar imagen de plano
              </Button>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </>
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
