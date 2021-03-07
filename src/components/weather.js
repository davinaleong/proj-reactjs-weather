import PropTypes from 'prop-types';
import config from './../config/index';

const Weather = (props) => {
  const min = props.min - config.KELVIN;
  const max = props.max - config.KELVIN;

  return (
    <div>
      <div className="icon-container">
        <div className={'icon icon-' + props.weather.toLowerCase()}></div>
      </div>
      <h2 className="text-center">{props.weather}</h2>
      <p className="text-center">{props.description}</p>
      <p>Temperature: {min}&deg;C ~ {max}&deg;C</p>
      <p>Humidity: {props.humidity}%</p>
    </div>
  );
}

Weather.propTypes = {
  weather: PropTypes.string,
  description: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  humidity: PropTypes.number
};

export default Weather;