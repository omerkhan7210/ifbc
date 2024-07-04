import { Country, State, City } from "country-state-city";

export const getCountries = () => {
  return Country.getAllCountries();
};

export const getStatesOfCountry = (countryCode) => {
  return State.getStatesOfCountry(countryCode);
};

export const getStatesOfUS = () => {
  return State.getStatesOfCountry("USA");
};

export const getCitiesOfState = (countryCode, stateCode) => {
  return City.getCitiesOfState(countryCode, stateCode);
};
