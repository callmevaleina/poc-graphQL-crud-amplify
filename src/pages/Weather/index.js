import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  faTemperatureArrowUp,
  faTemperatureArrowDown,
  faSun,
  faMoon,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import {
  WeatherContainer,
  WeatherCountry,
  WeatherIcon,
  WeatherInfo,
  WeatherInfoContainer,
} from "./style";

const Weather = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=7.75&longitude=80.75&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration&timezone=auto`
      )
      .then((res) => {
        setWeather(res.data.daily);
      });
  }, []);

  return (
    <WeatherContainer>
      <WeatherCountry>Sri Lanka</WeatherCountry>
      <WeatherInfoContainer>
        <WeatherInfo>
          Max Temperature: {weather.apparent_temperature_max?.[0]} °C
        </WeatherInfo>
        <WeatherIcon icon={faTemperatureArrowUp} />
      </WeatherInfoContainer>
      <WeatherInfoContainer>
        <WeatherInfo>
          Min Temperature: {weather.apparent_temperature_min?.[0]} °C
        </WeatherInfo>
        <WeatherIcon icon={faTemperatureArrowDown} />
      </WeatherInfoContainer>
      <WeatherInfoContainer>
        <WeatherInfo>
          Wind Speed: {weather.windspeed_10m_max?.[0]} km/h
        </WeatherInfo>
        <WeatherIcon icon={faWind} />
      </WeatherInfoContainer>
      <WeatherInfoContainer>
        <WeatherInfo>
          Sunrise: {new Date(weather.sunrise?.[0]).toLocaleString("lookup")}
        </WeatherInfo>
        <WeatherIcon icon={faSun} />
      </WeatherInfoContainer>
      <WeatherInfoContainer>
        <WeatherInfo>
          Sunset: {new Date(weather.sunset?.[0]).toLocaleString("lookup")}
        </WeatherInfo>
        <WeatherIcon icon={faMoon} />
      </WeatherInfoContainer>
    </WeatherContainer>
  );
};

export default Weather;
