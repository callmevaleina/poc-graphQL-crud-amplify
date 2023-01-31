import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WeatherContainer = styled.div`
  width: 420px;
  height: 420px;
  background: rgba(149, 149, 149, 0.068);
  backdrop-filter: blur(6px);
  border-radius: 5px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.306);
  color: #a75d5d;
  margin-top: 50px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

const WeatherCountry = styled.h2`
  font-weight: bolder;
  color: #a75d5d;
  text-transform: uppercase;
  font-size: 35px;
  width: 80%;
  text-align: center;
  padding: 0 1rem;
  display: flex;
  align-items: center;
`;

const WeatherInfoContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const WeatherInfo = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

const WeatherIcon = styled(FontAwesomeIcon)`
  color: #a75d5d;
  font-size: 25px;
  cursor: pointer;
`;

export {
  WeatherContainer,
  WeatherCountry,
  WeatherInfoContainer,
  WeatherInfo,
  WeatherIcon,
};
