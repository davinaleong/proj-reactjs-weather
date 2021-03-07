import React from 'react';
import axios from 'axios';

import Alert from './components/alert';
import Loader from './components/loader';
import Weather from './components/weather';

import config from './config/index';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
      state: this.props.states.EMPTY,
      city: '',
      country: '',
      result: null
    };
  }

  changeCityHandler = (event) => {
    this.setState({
      city: event.target.value
    });
  }

  changeCountryHandler = (event) => {
    this.setState({
      country: event.target.value
    });
  }

  submitFormHandler = (event) => {
    event.preventDefault();
    
    if (this.state.city === '') {
      this.setState({
        error: "The city field is required."
      });
      return;
    }

    if (this.state.country === '') {
      this.setState({
        error: "The country field is required."
      });
      return;
    }

    this.setState({
      error: '',
      state: this.props.states.LOADING
    });

    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.country},${this.state.city}&appid=${config.API_KEY}`)
      .then(response => {
        const data = response.data;
        if (data.message) {
          this.setState({
            state: this.props.states.EMPTY,
            error: data.message
          });
        } else {
          this.setState({
            state: this.props.states.LOADED,
            result: {
              weather: data.weather[0].main,
              description: data.weather[0].description,
              min: data.main.temp_min,
              max: data.main.temp_max,
              humidity: data.main.humidity
            }
          });
        }
      }).catch(error => {
        this.setState({
          state: this.props.states.EMPTY,
          error: error.response.data.message
        });
      });
  }

  render() {
    let alert = null;
    if (this.state.error) {
      alert = <Alert text={this.state.error} />
    }

    let result = null;
    switch(this.state.state) {
      case this.props.states.LOADED:
        result = (
          <Weather
            weather={this.state.result.weather}
            description={this.state.result.description}
            min={this.state.result.min}
            max={this.state.result.max}
            humidity={this.state.result.humidity} />
        );
        break;

      case this.props.states.LOADING:
        result = <Loader />;
        break;

      default:
        result = <div></div>;
    }

    return (
      <main>
        <h1>
          {"Today's Weather"}
          <hr/>
        </h1>

        {alert}

        <form onSubmit={this.submitFormHandler}>
          <label className="spacing">
            <span className="spacing">City:</span>
            <input type="text" name="city" value={this.state.city} onChange={this.changeCityHandler} />
          </label>
          
          <label className="spacing">
            <span className="spacing">Country:</span>
            <input type="text" name="country" value={this.state.country} onChange={this.changeCountryHandler} />
          </label>
          
          <button type="submit">Submit</button>
        </form>

        {result}
      </main>
    );
  }
}

export default App;