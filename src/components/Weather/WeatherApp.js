import React from "react";
import axios from 'axios';  
import Input from "@mui/material/Input";
import {Button} from 'reactstrap'
export default function  WeatherApp () {
  
    // const [ data , setData ] = React.useState([])
    const [ place , setPlace ] = React.useState('New York')
    const [ temperature , setTemperature ] = React.useState([])
    const handleChangeplace = (e) => {
      // console.log(e.target.value)
      setPlace(e.target.value)
    }
    const handlesubmitplace = ( ) => {
      axios.get('http://api.weatherstack.com/current', {
        params: {
          access_key : "0b367e22073600de2c45401051bf51e0",
          query : place
        }
      })
      .then(function (response) {
        console.log(response.data)
        setTemperature(response.data.current.temperature)
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    
    }
//     useEffect(() => { 
//     axios.get('https://jsonplaceholder.typicode.com/todos')
//   .then(function (response) {
//     // handle success
    
//     // setApiData(response.data)
//     // apiData = response.data
//     // console.log(response.data)
//      setData(response.data)
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {

// // console.log(apiData)

//   });
  
// }, []);




    return (
        <div style={{textAlign:"center"}}>          
           <div> <Input
              type="text"
              style={{
                marginTop: "0px",
                width: "90%",
                fontSize: "12px",
                padding: "10px",
                marginLeft: "1rem",
              }}
              value={place}
              onChange={handleChangeplace}
            />
            </div>
           <div > <Button outline={'success'} onClick={handlesubmitplace} > Submit </Button></div>
          
           <h1>{temperature} Degree celcius</h1>
           
           
        </div>
    )
}
