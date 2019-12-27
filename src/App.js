/* App.js 

Contains the routes to all the pages available on marcomasik.com.
Switching between those pages is enabled here. 

*/

import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './main.css';

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


/* Fading animation transition when switching to a page */
const Fading = posed.div({
    enter: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
});

const App = () => (
    <BrowserRouter>
        <Route
            render={({ location }) => (
                <PoseGroup>
                    <Fading key={location.pathname}>
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
                    </Fading>
                </PoseGroup>
            )}
        />
    </BrowserRouter>
);

export default App;
