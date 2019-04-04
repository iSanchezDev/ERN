import React, { Component } from 'react';
import HomeComponent from '../components/home/home.component';
import NavbarComponent from '../components/navbar/navbar.component';

class App extends Component {

  render() {
    return (
      <div>
        <NavbarComponent/>
        <HomeComponent/>
      </div>
    );
  }
}


export default App;
