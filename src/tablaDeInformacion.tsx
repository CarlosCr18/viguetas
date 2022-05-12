import React from "react";

export type objectInterface = {
  material: string;
  cantidad: number;
  largoDeVigueta: number;
};
export type tablaProps = {
  arrayDeInformacion: Array<objectInterface>;
};

const TablaDeInformacion: React.FC<tablaProps> = ({ arrayDeInformacion }) => {
  const [arrayDeInputsDeCostos, setArrayDeInputsDeCostos] = React.useState([
    0, 0, 0, 0, 0,
  ]);
  const [preciosTotales, setPreciosTotales] = React.useState([0, 0, 0, 0, 0]);

  const arrayjson = JSON.stringify(arrayDeInformacion);
  const arrayjsonCostos = JSON.stringify(arrayDeInputsDeCostos);
  React.useEffect(() => {
    let tempArrayDePreciosTotales = arrayDeInputsDeCostos.map(
      (element, index) => {
        return (
          Math.round(
            (element *
              arrayDeInformacion[index].cantidad *
              arrayDeInformacion[index].largoDeVigueta) /
              0.1
          ) * 0.1
        );
      }
    );
    setPreciosTotales(tempArrayDePreciosTotales);
  }, [arrayjson, arrayjsonCostos]);

  const sumaTotalDePrecios = preciosTotales.reduce(
    (counter, element) => counter + element
  );

  //   console.log(arrayDeInputsDeCostos, preciosTotales);
  return (
    <table className="tablaDeCotizacion">
      <tbody>
        <tr>
          <th>
            <strong>Material</strong>
          </th>
          <th>
            <strong>Cantidad</strong>
          </th>
          <th>
            <strong>Costo</strong>
          </th>
          <th>
            <strong>Total</strong>
          </th>
        </tr>
        {arrayDeInformacion.map((element, index) => {
          return (
            <tr key={index + element.material + ""}>
              <th>{element.material}</th>
              <th>{element.cantidad}</th>
              <th>
                <input
                  className="inputDeCostos"
                  value={arrayDeInputsDeCostos[index]}
                  type="number"
                  min="0"
                  onChange={({ target }) => {
                    let tempArrayDeInputsDeCostos: number[] = [
                      ...arrayDeInputsDeCostos,
                    ];

                    let itemDeArrayDeInputsDeCostos: number = parseInt(
                      target.value
                    );
                    tempArrayDeInputsDeCostos[index] =
                      itemDeArrayDeInputsDeCostos;

                    setArrayDeInputsDeCostos(tempArrayDeInputsDeCostos);
                  }}
                ></input>
              </th>
              <th>
                {(
                  Math.round(
                    (arrayDeInputsDeCostos[index] *
                      element.cantidad *
                      element.largoDeVigueta) /
                      0.1
                  ) * 0.1
                ).toFixed(2)}
              </th>
            </tr>
          );
        })}
        <tr>
          <th>Total de materiales</th>
          <th>
            <strong></strong>
          </th>
          <th>
            <strong></strong>
          </th>
          <th>
            {preciosTotales
              .reduce((counter, element, index) =>
                index < 3 ? counter + element : counter
              )
              .toFixed(2)}
          </th>
        </tr>
        <tr>
          <th>Total de presupuesto</th>
          <th></th>
          <th></th>
          <th>{sumaTotalDePrecios.toFixed(2)}</th>
        </tr>
        <tr>
          <th>Precio por m^2</th>
          <th></th>
          <th>
            {sumaTotalDePrecios +
              " / " +
              (arrayDeInformacion[2].cantidad / 1.1).toFixed(2)}
          </th>
          <th>
            {(
              sumaTotalDePrecios /
              (arrayDeInformacion[2].cantidad / 1.1)
            ).toFixed(2)}
          </th>
        </tr>
      </tbody>
    </table>
  );
};

export default TablaDeInformacion;
