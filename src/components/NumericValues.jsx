import React, { useContext } from 'react';
import { PlanetContext } from '../context/PlanetProvider';

export default function NumericValues() {
  const { filterObject, setFilter, addFilter, filterArray,
    columnsArray } = useContext(PlanetContext);
  // `population`, `orbital_period`, `diameter`, `rotation_period` e `surface_water`
  return (
    <>
      <label
        htmlFor="column"
      >
        <select
          id="column"
          name="column"
          data-testid="column-filter"
          onChange={ (e) => setFilter({ ...filterObject, column: e.target.value }) }
        >
          { columnsArray.filter((item) => !filterArray.includes(item))
            .map((item) => (
              <option
                key={ item }
                value={ item }
              >
                {item}
              </option>))}

        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          name="comparison"
          id="comparison-filter"
          data-testid="comparison-filter"
          onChange={ (e) => setFilter({ ...filterObject, comparison: e.target.value }) }
        >
          <option value="maior que">Maior que</option>
          <option value="menor que">Menor que</option>
          <option value="igual a">Igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          name="value"
          type="text"
          id="value-filter"
          placeholder="Valor"
          data-testid="value-filter"
          onChange={ (e) => setFilter({ ...filterObject, value: e.target.value }) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => addFilter() }
      >
        Filtrar
      </button>
    </>
  );
}
