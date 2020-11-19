import React from 'react';
import classes from "./Conditions.module.css";

const conditions = (props) => {
    return (
        <div className= {classes.Wrapper}>
           {props.error && <small>Please enter a valid city</small>} 
            {props.loading && <div>Loading...</div>}
           {props.responseObj.cod === 200 ?
               <div>
                   <p><strong>{props.responseObj.name}</strong></p>
                   <p>It is currently {Math.round(props.responseObj.main.temp)} degrees with {props.responseObj.weather[0].description}. 
                   <br></br>
                   Humidity: {Math.round(props.responseObj.main.humidity)}%, 
                   <br></br>
                   Highs of {parseInt(props.responseObj.main.tempmax)} and a low of {Math.round(props.responseObj.main.tempmin)} </p>
               
               </div>
           : null
           }
       </div>
   )
}
export default conditions;