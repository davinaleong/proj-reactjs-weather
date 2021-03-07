import React from 'react';

import Alert from './components/alert';
import Loader from './components/loader';
import Weather from './components/weather';

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
      error: ''
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
          <label>
            City:
            <input type="text" name="city" value={this.state.city} onChange={this.changeCityHandler} />
          </label>
          
          <label>
            Country:
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