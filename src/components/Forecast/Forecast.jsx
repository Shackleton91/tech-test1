import React, { useState } from 'react';
import Conditions from "../Conditions/Conditions";
import classes from "./Forecast.module.css";

const Forecast = () => {

    let [city, setCity] = useState(' ');
    let [unit, setUnit] = useState('imperial');
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    
    let [responseObj, setResponseObj] = useState({});
    
    // const uriEncodedCity = encodeURIComponent(city);
    
    function getForecast(e) {
        e.preventDefault();
        if (city.length === 0) {
            return setError(true);
        }
        // Clear state in preparation for new data
        setError(false);
        setResponseObj({});
       
        setLoading(true);
       
        

        let uriEncodedCity = encodeURIComponent(city);
     fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "4697ef0277mshdd01781cf11f3ddp14d0f4jsn4bc33028c24a",
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(response => {
            if (response.cod !== 200) {
                throw new Error()
            }
            setResponseObj(response);
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            setLoading(false);
            console.log(err.message);
        });

     }
   return (
    <div>
    <h2>Find Current Weather Conditions</h2>
    <form onSubmit={getForecast}>
                <input 
                    className={classes.textInput}
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Fahrenheit
                </label>
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Celcius
                </label>
                <button className={classes.Button} type="submit">Get Forecast</button>
            </form>
    <Conditions 
        responseObj={responseObj} 
        error={error} 
        loading={loading}
        />
</div>
   )
   }
export default Forecast;