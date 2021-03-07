import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      state: this.props.states.EMPTY,
      city: '',
      country: ''
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

  render() {
    return (
      <main>
        <h1>
          {"Today's Weather"}
          <hr/>
        </h1>

        <form>
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
      </main>
    );
  }
}

export default App;