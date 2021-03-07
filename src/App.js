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

  render() {
    return (
      <main>
        <h1>
          Today's Weather
          <hr/>
        </h1>

        <div className="form">
          <label>City:</label>
          <input type="text" name="city" value={this.state.city} onChange={this.changeCityHandler} />
        </div>

        <div>
          <div className="icon icon-sun"></div>
        </div>
      </main>
    );
  }
}

export default App;