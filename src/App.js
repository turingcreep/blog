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
          <div class="blog">
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
          </div>
    );
  }
}

export default App;
