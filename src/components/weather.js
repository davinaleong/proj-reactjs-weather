const kelvin = 273.15;

const Weather = (props) => {
  const min = props.min - kelvin;
  const max = props.max - kelvin;

  return (
    <div>
      <div className={'icon icon-' + props.weather}></div>
      <p>Temperature: {min}&deg;C ~ {max}&deg;C</p>
      <p>Humidity: {props.humidity}%</p>
    </div>
  );
}

export default Weather;