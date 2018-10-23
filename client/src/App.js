import React, { Component } from 'react';
import HomePage from './components/homePage';
import AdminPage from './components/adminHome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AdminPage />
      </div>
    );
  }
}



export default App;
