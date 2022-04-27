import React from "react";

export type Props = {
  cantidadDeViguetas: number;
  ancho: number;
  largo: number;
  bovedillaDeConcreto: boolean;
  inicial: boolean;
};

const Informacion: React.FC<Props> = ({
  cantidadDeViguetas = 0,
  ancho = 0,
  largo = 0,
  bovedillaDeConcreto = false,
  inicial = false,
}) => {
  const area: number = ancho * largo;
  const malla: number = (ancho / 100) * (largo / 100);
  const cantidadDeBovedillas: number = bovedillaDeConcreto
    ? (area - cantidadDeViguetas * 12 * largo) / (58 * 300)
    : (area - cantidadDeViguetas * 12 * largo) / (78 * 150);
  return (
    <div className="InformacionContainer">
      <p>
        {inicial
          ? "viguetas: " + (cantidadDeViguetas + 1)
          : "viguetas: " + cantidadDeViguetas}
      </p>
      <p>{"Bovedillas: " + cantidadDeBovedillas * 1.1}</p>
      <p>{"malla: " + malla * 1.2}</p>
    </div>
  );
};

export default Informacion;
