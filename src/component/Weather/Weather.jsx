
import WeatherIcon from '../WeatherIcon/WeatherIcon ';
import WeatherData from '../WeatherData /WeatherData ';
import './Weather.css';


const Weather = ({
  weather: {img, imgAlt, conditions, day, time } 
}) => (
      <div className="weather">
  
  <WeatherIcon img={img} imgAlt={imgAlt}  />
  <WeatherData conditions={conditions} day={day}  time={time}/>
  
  </div>);

  export default Weather;