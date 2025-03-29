import React, {useEffect} from "react";
import axios from 'axios';  
export default function  WeatherApp () {
    // const [ apiData , setApiData ] = React.useState([])

    var apiData = []
    const [ data , setData ] = React.useState([])
    useEffect(() => { 
    axios.get('https://jsonplaceholder.typicode.com/todos')
  .then(function (response) {
    // handle success
    
    // setApiData(response.data)
    // apiData = response.data
    // console.log(response.data)
     setData(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {

// console.log(apiData)

  });
  
}, []);

if(data.length > 0 ){
    return (
        <div>
           {
            data.map((dataone, key)=> (
                <h1>
                    {dataone.title } 
                </h1>
            ))
           } 
           
        </div>
    )
}
}