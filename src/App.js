import React, { Component } from 'react';
import './App.css';

// Custom component imports 
import AboutMe from './components/aboutme';
import CoreCompetancies from './components/corecompetancies';
import CurrentInterests from './components/currentinterests';
import Experience from './components/experience';
import Hobbies from './components/hobbies';
import OtherCompetancies from './components/othercompetancies';
import Navigator from './components/navigator';

class App extends Component {
  render() {
    return (
          <div className="blog">
              <Navigator>
                <section>
                    <AboutMe/>
                </section>
                <section>
                    <CoreCompetancies/>
                </section>
                <section>
                    <OtherCompetancies/>
                </section>
                <section>
                    <CurrentInterests/>
                </section>
                <section>
                    <Hobbies/>
                </section>
                <section>
                    <Experience/>
                </section>
            </Navigator>
        </div>
    );
  }
}

export default App;
