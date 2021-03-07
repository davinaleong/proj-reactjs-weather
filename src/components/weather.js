import PropTypes from 'prop-types';
import config from './../config/index';

const Weather = (props) => {
  const min = props.min - config.KELVIN;
  const max = props.max - config.KELVIN;

  return (
    <div>
      <div className={'icon icon-' + props.weather.toLowerCase()}></div>
      <h2>{props.weather}</h2>
      <h3>{props.description}</h3>
      <p>Temperature: {min}&deg;C ~ {max}&deg;C</p>
      <p>Humidity: {props.humidity}%</p>
    </div>
  );
}

Weather.propTypes = {
  weather: PropTypes.string,
  description: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  humidity: PropTypes.string
};

export default Weather;