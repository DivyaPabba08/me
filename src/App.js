import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Skillset from './components/skillset'
import Academicprojects from './components/academicprojects'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
          <Skillset></Skillset>
					<Timeline></Timeline>
          <Academicprojects></Academicprojects>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
