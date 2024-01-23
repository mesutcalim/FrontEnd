import { useWeather, WeatherProvider } from "../context/WeatherContext";
import React from "react";

function Select() {
  const { cities, setSelectedCity } = useWeather();
  const handleChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <nav>
      <label htmlFor="cities">Select Your City : </label>
      <select name="cities" id="cities" onChange={handleChange} placeholder={`${cities}`}>
        <option value="null">Select</option>
        {cities.map((city) => (
          <option value={city.name} key={city.id}>
            {city.name}
          </option>
        ))}
      </select>
    </nav>
  );
}

export default Select;
