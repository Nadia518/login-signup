import React,{useState} from 'react'
import axios from 'axios'

const Weatherfile = () => {

    const [city,setCity] = useState();

    const [weather,setWeather] = useState()

    const handleCityChange = (e) => {
        setCity(e.target.value)
    }

    const fetchWeather = async () => {
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'43dcec41d9d260be0090a245b69b392d'}`)
            setWeather(response)
        } 
        catch(error){
           console.log('Error fetching', error)
        }
    }

    const handleClick = () => {
        fetchWeather();
    }

  return (
    <div className='weather-container'>
     <input type="text" placeholder='Enter City Name' value={city} onChange={handleCityChange} />
     <button onClick={handleClick}>Get Weather</button>
     {weather && 
     <>
         <div className='weather-info'>
         <h3>{weather.data.name}</h3>
         <p>Temp is {weather.data.main.temp}</p>
         <p>{weather.data.weather[0].description}</p>
         </div>
     </>
     }
    </div>
  )
}

export default Weatherfile