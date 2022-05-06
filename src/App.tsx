import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Vigueta from "./vigueta";
import FormDeViguetas from "./form";
import Informacion from "./informacion";
import InformacionDeBovedilla from "./informacionDeBovedilla";
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
  const [cantidadDeViguetas, setCantidadDeViguetas] = React.useState(0);
  const [largoDeVigueta, setLargoDeViguetas] = React.useState(0);
  const [cantidadDeHileras, setCantidadDeHileras] =
    React.useState<number>(cantidadDeViguetas);

  React.useEffect(() => {
    setCantidadDeHileras(
      Math.round(ancho / (tipoDeBovedilla.efectivo + 12) / 0.5) * 0.5
    );
    return setCantidadDeHileras(
      Math.round(ancho / (tipoDeBovedilla.efectivo + 12) / 0.5) * 0.5
    );
  }, [cantidadDeViguetas]);

  return (
    <div className="App">
      <header className="App-header">
        <FormDeViguetas
          setAncho={setAncho}
          setLargo={setLargo}
          setTipoDeBovedilla={setTipoDeBovedilla}
          setInicial={setViguetaInicial}
        />
        <Informacion
          cantidadDeViguetas={cantidadDeViguetas}
          ancho={ancho}
          largo={largo}
          tipoDeBovedilla={tipoDeBovedilla}
          inicial={viguetaInicial}
          largoDeVigueta={largoDeVigueta}
          cantidadDeHileras={cantidadDeHileras}
        />
        <InformacionDeBovedilla tipoDeBovedilla={tipoDeBovedilla} />
      </header>
      <body>
        <ControlesDePlano />
        <div className="Appvigueta" id="plano">
          <Vigueta
            ancho={ancho}
            largo={largo}
            tipoDeBovedilla={tipoDeBovedilla}
            inicial={viguetaInicial}
            setCantidadDeViguetas={setCantidadDeViguetas}
            setLargoDeViguetas={setLargoDeViguetas}
          />
        </div>
      </body>
    </div>
  );
}

export default App;
