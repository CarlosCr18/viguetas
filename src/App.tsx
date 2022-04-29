import React from "react";
import "./App.css";
import Vigueta from "./vigueta";
import FormDeViguetas from "./form";
import Informacion from "./informacion";
import InformacionDeBovedilla from "./informacionDeBovedilla";

export interface TipoDeBovedilla {
  nombre: string;
  material: string;
  alto: number;
  ancho: number;
  largo: number;
  efectivo: number;
}

const initTipoDeBovedilla: TipoDeBovedilla = {
  nombre: "Bp90x18",
  material: "poliestireno",
  alto: 18,
  ancho: 82,
  largo: 150,
  efectivo: 78,
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
    setCantidadDeHileras(cantidadDeViguetas);
    return setCantidadDeViguetas(cantidadDeViguetas);
  }, [cantidadDeViguetas]);
  return (
    <div className="App">
      <header className="App-header">
        <FormDeViguetas
          setAncho={setAncho}
          setLargo={setLargo}
          setTipoDeBovedilla={setTipoDeBovedilla}
          setInicial={setViguetaInicial}
          setCantidadDeHileras={setCantidadDeHileras}
          cantidadDeViguetas={cantidadDeViguetas}
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
        <div className="sliderContainer">
          <label htmlFor="slider">Cambiar zoom </label>
          <input
            id="slider"
            type="range"
            min="30"
            max="100"
            onChange={({ target }) => {
              document.documentElement.style.setProperty(
                `--escala`,
                "" + parseInt(target.value) / 100
              );
            }}
          ></input>
        </div>
        <div className="Appvigueta">
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