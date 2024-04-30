import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaSearch, FaWind } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { useParams } from "react-router-dom";
import UseFetch from "../Hooks/UseFetch";
import Loader from "../loaders/Loader";

const Weather = () => {
  const { city } = useParams();
  const [citys, setCity] = useState(city);
  const API_KEY = "050e5235e4f3ad7be2de6e6087ea168e";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${citys}&units=metric&appid=${API_KEY}`;

  const [weather, setWeather] = useState();
  const [error, setError] = useState("");
  const { Data, Loading } = UseFetch(url);
  useEffect(() => {
    if (Data) {
      setWeather(Data.data);
    }
  }, [Data]);

  return (
    <>
      {Loading ? (
        <Loader />
      ) : (
        <Full>
          <Container>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {weather && weather.weather && (
              <Content>
                <WeatherImage>
                  <WeatherImageImg
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  />
                  <WeatherImageDesc>
                    {weather.weather[0].description}
                  </WeatherImageDesc>
                </WeatherImage>
                <WeatherTemp>
                  {weather.main.temp}
                  <span>&deg;C</span>
                </WeatherTemp>
                <WeatherCity>
                  <LocationIcon />
                  <p>
                    {weather.name},<span>{weather.sys.country}</span>
                  </p>
                </WeatherCity>
                <WeatherStats>
                  <Wind>
                    <WindIcon />
                    <WindSpeed>
                      {weather.wind.speed}
                      <span>Km/h</span>
                    </WindSpeed>
                    <WindHeading>Wind Speed</WindHeading>
                  </Wind>
                  <Humidity>
                    <HumidityIcon />
                    <HumidityPercent>
                      {weather.main.humidity}
                      <span>%</span>
                    </HumidityPercent>
                    <HumidityHeading>Humidity</HumidityHeading>
                  </Humidity>
                </WeatherStats>
              </Content>
            )}
          </Container>
        </Full>
      )}
    </>
  );
};

export default Weather;

const Full = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  background-color: rgb(74, 144, 226);
`;
const Container = styled.div`
  backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  width: 500px;
  padding: 1rem;
  margin: auto;
  margin-top: 25px;
  @media (max-width: 768px) {
    width: 99%;
    padding: 3rem;
  }
`;

const ErrorMessage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  font-size: 20px;
  font-weight: 600;
  color: #1c1c1c;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WeatherImage = styled.div`
  text-transform: capitalize;
  color: #1c1c1c;
`;

const WeatherImageImg = styled.img`
  width: 100%;
  height: 100%;
  margin: 10px auto 0 auto;
`;

const WeatherImageDesc = styled.h3`
  font-size: 30px;
  text-align: center;
  margin-top: 0;
  margin-bottom: 5px;
`;

const WeatherTemp = styled.h2`
  color: #40a2e3;
  text-align: center;
  font-size: 50px;
  margin: 25px auto 15px auto;
`;

const WeatherCity = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #1c1c1c;
  font-weight: 500;
  font-size: 35px;
  margin-bottom: 15px;
`;

const LocationIcon = styled(MdLocationOn)`
  color: #40a2e3;
  margin-top: 8px;
  font-size: 30px;
  padding-right: 5px;
`;

const WeatherStats = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 60px;
  margin-top: 50px;
`;

const Wind = styled.div`
  background-color: #40a2e3;
  width: 180px;
  height: 150px;
  border-radius: 15px;
  box-shadow: 4px 3px 10px 0px rgba(0, 0, 0, 0.34);
  display: flex;
  flex-direction: column;
  gap: 7px;
  justify-content: center;
  align-items: center;
`;

const WindIcon = styled(FaWind)`
  color: #fff;
  font-size: 50px;
`;

const Humidity = styled.div`
  background-color: #40a2e3;
  width: 180px;
  height: 150px;
  border-radius: 15px;
  box-shadow: 4px 3px 10px 0px rgba(0, 0, 0, 0.34);
  display: flex;
  flex-direction: column;
  gap: 7px;
  justify-content: center;
  align-items: center;
`;

const HumidityIcon = styled(WiHumidity)`
  color: #fff;
  font-size: 60px;
  margin-top: -10px;
`;

const WindSpeed = styled.h3`
  color: #fff;
  margin-top: 0;
  font-weight: 700;
`;

const WindHeading = styled.h3`
  color: #fff;
  text-transform: uppercase;
  font-size: 23px;
`;

const HumidityPercent = styled.h3`
  color: #fff;
  margin-top: -11px;
  font-weight: 700;
`;

const HumidityHeading = styled.h3`
  color: #fff;
  text-transform: uppercase;
  font-size: 23px;
`;
