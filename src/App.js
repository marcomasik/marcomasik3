import React from 'react';

import './main.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import posed, { PoseGroup } from 'react-pose';

import { Start } from './components/pages/Start/Start.js';
import { Skills } from "./components/pages/Skills/Skills.js";
import { Works } from "./components/pages/Works/Works.js";
import { November } from "./components/pages/Works/WorkPages/November.js";
import { Swarm } from "./components/pages/Works/WorkPages/Swarm.js";
import { Borneo } from "./components/pages/Works/WorkPages/Borneo.js";
import { Muskinn } from "./components/pages/Works/WorkPages/Muskinn.js";
import { Languagestudio } from "./components/pages/Works/WorkPages/Languagestudio.js";
import { Hungaroplant } from "./components/pages/Works/WorkPages/Hungaroplant.js";
import { Farest } from "./components/pages/Works/WorkPages/Farest.js";
import { Contact } from "./components/pages/Contact/Contact.js";

const RouteContainer = posed.div({
  enter: {
    //skewX: 0, 
    opacity: 1
  },
  exit: {
    //skewX: 1,
    opacity: 0
  }
});

const App = () => (
  <Route
    render={({ location }) => (
    <PoseGroup>
      <RouteContainer key={location.pathname}>
        <Switch location={location}>
          <Route exact path="/" component={Start} key="start" />
          <Route exact path="/skills" component={Skills} key="skills" />
          <Route exact path="/works" component={Works} key="works" />
          <Route exact path="/works/november" component={November} key="november" />
          <Route exact path="/works/swarm" component={Swarm} key="swarm" />
          <Route exact path="/works/borneo" component={Borneo} key="borneo" />
          <Route exact path="/works/muskinn" component={Muskinn} key="muskinn" />
          <Route exact path="/works/languagestudio" component={Languagestudio} key="languagestudio" />
          <Route exact path="/works/hungaroplant" component={Hungaroplant} key="hungaroplant" />
          <Route exact path="/works/farest" component={Farest} key="farest" />
          <Route exact path="/contact" component={Contact} key="contact" />
        </Switch>
      </RouteContainer>
    </PoseGroup>
    )}
  />
);

export default App;
