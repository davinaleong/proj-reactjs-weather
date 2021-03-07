import React from 'react';

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>
          Today's Weather
          <hr/>
        </h1>

        <div>
          <div className="icon icon-sun"></div>
        </div>
      </main>
    );
  }
}

export default App;