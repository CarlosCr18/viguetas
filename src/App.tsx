import React from "react";
import "./App.css";
import Vigueta from "./vigueta";
import FormDeViguetas from "./form";
import Informacion from "./informacion";

function App() {
  const [ancho, setAncho] = React.useState(0);
  const [largo, setLargo] = React.useState(0);
  const [bovedillaDeConcreto, setBovedillaDeConcreto] = React.useState(false);
  const [viguetaInicial, setViguetaInicial] = React.useState(false);
  const [cantidadDeViguetas, setCantidadDeViguetas] = React.useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <FormDeViguetas
          setAncho={setAncho}
          setLargo={setLargo}
          setConcreto={setBovedillaDeConcreto}
          setInicial={setViguetaInicial}
        />
        <Informacion
          cantidadDeViguetas={cantidadDeViguetas}
          ancho={ancho}
          largo={largo}
          bovedillaDeConcreto={bovedillaDeConcreto}
          inicial={viguetaInicial}
        />
      </header>

      <Vigueta
        ancho={ancho}
        largo={largo}
        concreto={bovedillaDeConcreto}
        inicial={viguetaInicial}
        setCantidadDeViguetas={setCantidadDeViguetas}
      />
    </div>
  );
}

export default App;
