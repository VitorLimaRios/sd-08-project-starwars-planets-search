import React, { useContext } from 'react';
import StarWarsContext from '../Contexts/StarWars/StarWarsContext';

const Table = () => {
  const { planets,
    filters: {
      filterByName: { name },
      filterByNumericValues },
  } = useContext(StarWarsContext);

  const { column, comparison, value } = filterByNumericValues[0];

  const headers = planets[0] || [];

  const evaluate = (a, b, op) => {
    if (Number.isNaN(a) || Number.isNaN(b)) return false;

    a = parseInt(a, 10);
    b = parseInt(b, 10);

    switch (op) {
    case 'maior que':
      return a > b;

    case 'menor que':
      return a < b;

    case 'igual a':
      return a === b;

    default:
      return true;
    }
  };

  return (
    <table>
      <thead>
        <tr>
          {
            Object.keys(headers)
              .map((header, index) => <th key={ index }>{header}</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          planets
            .filter((planet) => (name ? (planet.name).includes(name) : true))
            .filter((planet) => (value
              ? evaluate(planet[column], value, comparison)
              : true
            ))
            .map((planet, index) => (
              <tr key={ index }>
                {
                  Object.values(planet)
                    .map((info) => <td key={ info }>{info}</td>)
                }
              </tr>
            ))
        }
      </tbody>
    </table>
  );
};

export default Table;
