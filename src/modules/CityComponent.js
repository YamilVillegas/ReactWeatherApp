import styled from 'styled-components';

const WeatherLogo = styled.img`
width: 140px;
height: 140px;
margin: 40px auto;
`

const ChooseCityLabel = styled.span`
color:black;
font-size:18px;
font-weight:bold;
margin: 10px auto;
`

const SearchBox = styled.form`
    display: flex;
    flex-direction: row;
    border: black solid 1px;
    border-radius: 2px;
    color: black;
    font-size: 18px;
    font-weight: bold;
    margin: 20px auto;

    & input {
        padding:10px;
        font-size: 14px;
        border: none;
        outline: none;
        font-weight: bold;
    }

    & button {
        padding:10px;
        font-size: 14px;
        color: white;
        background-color: red;
        border: none;
        outline: none;
        font-weight: bold;
        cursor: pointer;
    }
`

const CityComponent = (props) => {
    const {updateCity, fetchWeather}=props; //Destructuring updateCity
    return (
        <>
        <WeatherLogo src="icon/WeatherIcon.png"/>
        <ChooseCityLabel>Find the Weather of your city</ChooseCityLabel>
        <SearchBox onSubmit={fetchWeather}>
            <input placeholder="City" onChange={(e) => updateCity(e.target.value)} /> 
            <button type="submit">Search</button>
        </SearchBox>
        </>
    )
}; // In the input the onChange updates the city using the updateCity() function passing it the new value. 
// In the button we use type submit and then in SearchBox we add onSubmit so when the user clicks on the button it will fetch the weather using the fetchWeather() function made in app.js.

export default CityComponent;