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
import { November } from "./components/pages/Works/content/November.js";
import { Swarm } from "./components/pages/Works/content/Swarm.js";
import { Borneo } from "./components/pages/Works/content/Borneo.js";
import { Muskinn } from "./components/pages/Works/content/Muskinn.js";
import { Hungaroplant } from "./components/pages/Works/content/Hungaroplant.js";
import { Farest } from "./components/pages/Works/content/Farest.js";
import { Miles } from "./components/pages/Works/content/Miles.js";
import { Contact } from "./components/pages/Contact/Contact.js";

import { Donate } from "./components/pages/Donate/Donate.js";

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
                            <Route exact path="/works/hungaroplant" component={Hungaroplant} key="hungaroplant" />
                            <Route exact path="/works/farest" component={Farest} key="farest" />
                            <Route exact path="/works/miles" component={Miles} key="miles" />
                            <Route exact path="/contact" component={Contact} key="contact" />
                            <Route exact path="/donate" component={Donate} key="donate" />
                        </Switch>
                    </Fading>
                </PoseGroup>
            )}
        />
    </BrowserRouter>
);

export default App;
