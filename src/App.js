import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherComponent";

const Container = styled.div`
  display:flex;
  flex-direction:column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 380px;
  background: white;
  font-family: Montserrat;
` //Styling of the container in which we will be placing the weather information

const AppLabel = styled.div`
color:black;
font-size: 18px;
font-weight: bold;
`

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = 
      await  axios.get(`api.openweathermap.org/data/2.5/weather?q={city}&appid={API key}`)
      updateWeather(response.data)
  }; // Calling the API
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather}/>
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather}/> )}
    </Container>
  );
} // If the weather is available we will show the WeatherComponent else we will show CityComponent

export default App;
