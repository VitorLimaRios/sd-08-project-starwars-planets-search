import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextStarWars from './ContextStarWars';

function ProviderStarWars({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [inputName, setInputName] = useState('');
  const [filter, setFilter] = useState({
    filterByName: { name: '' },
  });

  useEffect(() => {
    const fetchStarWarsAPI = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const dataInfo = await fetch(endpoint);
      const dataJson = await dataInfo.json();
      const { results } = dataJson;
      const dataPlanet = results;
      // console.log(dataJson);
      // console.log(dataPlanet);
      setPlanets(dataPlanet);
      setFilteredPlanets(dataPlanet);
    };
    fetchStarWarsAPI();
  }, []);

  useEffect(() => {
    const FilterEf = planets.filter(({ name }) => name.toLowerCase().includes(inputName));
    // console.log(filter);
    // if (!filter) setFilteredPlanets(planets);
    setFilteredPlanets(FilterEf);
  }, [planets, inputName]);

  // const filterPlanets = (planetsName) => {
  //   const result = planets.filter(({ name }) => name.toLowerCase().includes(planetsName));
  //   // console.log(filter);
  //   if (!result) setFilteredPlanets(planets);
  //   setFilteredPlanets(result);
  // };

  const handleInputName = (e) => {
    setInputName(e.target.value);
    // filterPlanets(inputName);
    // console.log('!');
  };

  const allContext = {
    planets,
    // filterPlanets,
    filteredPlanets,
    setFilteredPlanets,
    filter,
    setFilter,
    handleInputName,
    inputName,
  };

  return (
    <ContextStarWars.Provider value={ allContext }>
      { children }
    </ContextStarWars.Provider>
  );
}

ProviderStarWars.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderStarWars;
