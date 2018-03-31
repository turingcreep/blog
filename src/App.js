import React, { Component } from 'react';
import './App.css';

// Custom component imports 
import AboutMe from './components/aboutme';
import CoreCompetancies from './components/corecompetancies';
import CurrentInterests from './components/currentinterests';
import Experience from './components/experience';
import Hobbies from './components/hobbies';
import OtherCompetancies from './components/othercompetancies';

class App extends Component {
  render() {
    return (
          <div>
            <AboutMe/>
            <CoreCompetancies/>
            <OtherCompetancies/>
            <CurrentInterests/>
            <Hobbies/>
            <Experience/>
          </div>
    );
  }
}

export default App;
