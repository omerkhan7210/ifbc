import React, { useState, useEffect, createContext } from "react";
import {
  getCountries,
  getStatesOfCountry,
  getCitiesOfState,
} from "../Utils/locationUtils.js"; // Adjust the import path accordingly

export const CSCContext = createContext();

const LocationSelector = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      const countryList = getCountries();
      setCountries(countryList);
    };

    fetchCountries();
  }, []);

  const handleCountryChange = (e) => {
    const countryCode = e.target.value;
    setSelectedCountry(countryCode);
    const stateList = getStatesOfCountry(countryCode);
    setStates(stateList);
    setSelectedState("");
    setCities([]);
  };

  const handleStateChange = (e) => {
    const stateCode = e.target.value;
    setSelectedState(stateCode);
    const cityList = getCitiesOfState(selectedCountry, stateCode);
    setCities(cityList);
  };

  const countryDD = () => {
    return (
      <select className="candidate-select" onChange={handleCountryChange}>
        <option value="">Select Country</option>
        {countries.map((country) => (
          <option key={country.isoCode} value={country.isoCode}>
            {country.name}
          </option>
        ))}
      </select>
    );
  };

  const stateWithCountryDD = () => {
    return (
      <select className="candidate-select" onChange={handleStateChange}>
        <option value="">Select State</option>
        {states.length > 0 ? (
          <option value="" disabled>
            Please select a country
          </option>
        ) : (
          states.map((state) => (
            <option key={state.isoCode} value={state.isoCode}>
              {state.name}
            </option>
          ))
        )}
      </select>
    );
  };

  const stateWithoutCountryDD = (states) => {
    return (
      <select className="candidate-select" onChange={handleStateChange}>
        <option value="">Select State</option>

        {states.map((state) => (
          <option key={state.isoCode} value={state.isoCode}>
            {state.name}
          </option>
        ))}
      </select>
    );
  };

  const citiesDD = () => {
    return (
      <select className="candidate-select" onChange={handleStateChange}>
        <option value="">Select City</option>
        {states.length > 0 ? (
          <option value="" disabled>
            Please select a state
          </option>
        ) : (
          cities.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))
        )}
      </select>
    );
  };

  return (
    <CSCContext.Provider
      value={{
        cities,
        citiesDD,
        countries,
        countryDD,
        stateWithCountryDD,
        stateWithoutCountryDD,
        states,
        setSelectedState,
        setSelectedCountry,
      }}
    >
      {children}
    </CSCContext.Provider>
  );
};

export default LocationSelector;
