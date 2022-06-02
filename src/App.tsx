import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Vigueta from "./vigueta";
import FormDeViguetas from "./form";
import Informacion from "./informacion";
import ControlesDePlano from "./controlesDePlano";
import bp9018 from "./bp9018.jpg";

export interface TipoDeBovedilla {
  nombre: string;
  material: string;
  alto: number;
  ancho: number;
  largo: number;
  efectivo: number;
  url: string;
}

const initTipoDeBovedilla: TipoDeBovedilla = {
  nombre: "Bp90x18",
  material: "poliestireno",
  alto: 18,
  ancho: 82,
  largo: 150,
  efectivo: 78,
  url: bp9018,
};

function App() {
  const [ancho, setAncho] = React.useState(0);
  const [largo, setLargo] = React.useState(0);
  const [tipoDeBovedilla, setTipoDeBovedilla] =
    React.useState<TipoDeBovedilla>(initTipoDeBovedilla);
  const [viguetaInicial, setViguetaInicial] = React.useState(false);
  const [medidasSonInteriores, setMedidasSonInteriores] = React.useState(true);
  const [mostrarPlano, setMostrarPlano] = React.useState(false);

  const offsetDeMedidas: number = medidasSonInteriores ? 0 : 30;
  const cantidadDeHileras = +(
    Math.round(
      (ancho - offsetDeMedidas) / (tipoDeBovedilla.efectivo + 12) / 0.01
    ) * 0.01
  ).toFixed(2);

  const distanciaEntreViguetas: number = tipoDeBovedilla.efectivo;

  const cantidadDeViguetas = viguetaInicial
    ? Math.trunc((ancho - offsetDeMedidas - 12) / (distanciaEntreViguetas + 12))
    : Math.trunc((ancho - offsetDeMedidas) / (distanciaEntreViguetas + 12));

  const largoDeVigueta: number = !medidasSonInteriores
    ? Math.floor(largo / 10) * 10
    : Math.round(largo / 10) * 10 + 20;

  return (
    <div className="App">
      <div className="App-header">
        <FormDeViguetas
          setAncho={setAncho}
          setLargo={setLargo}
          setTipoDeBovedilla={setTipoDeBovedilla}
          setInicial={setViguetaInicial}
          setMedidasSonInteriores={setMedidasSonInteriores}
          medidasSonInteriores={medidasSonInteriores}
        />
        <Informacion
          cantidadDeViguetas={cantidadDeViguetas}
          ancho={ancho - offsetDeMedidas}
          largo={largo - offsetDeMedidas}
          tipoDeBovedilla={tipoDeBovedilla}
          inicial={viguetaInicial}
          largoDeVigueta={largoDeVigueta}
          cantidadDeHileras={cantidadDeHileras}
        />
      </div>
      <div className="plano">
        <ControlesDePlano
          mostrarPlano={mostrarPlano}
          setMostrarPlano={setMostrarPlano}
        />
        {mostrarPlano && (
          <div className="Appvigueta" id="plano">
            <Vigueta
              ancho={medidasSonInteriores ? ancho + 30 : ancho}
              largo={medidasSonInteriores ? largo + 30 : largo}
              tipoDeBovedilla={tipoDeBovedilla}
              inicial={viguetaInicial}
              cantidadDeViguetas={cantidadDeViguetas}
              largoDeVigueta={largoDeVigueta}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
