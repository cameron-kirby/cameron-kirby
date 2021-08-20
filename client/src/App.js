import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';
import { Navigation } from "./components"


function App() {
    const [navOpen, setNavOpen] = useState(false); // Nav state

    return (
        <div className="App">
            <Navigation navOpen={navOpen} setNavOpen={setNavOpen}/>
                <Switch>
                    <Route path="/work">
                        Hello work!
                    </Route>
                    <Route path="/profile">
                        Hello profile!
                    </Route>
                    <Route path="/journal">
                        Hello journal!
                    </Route>
                    <Route path="/contact">
                        Hello contact!
                    </Route>
                    <Route path="/">
                        Hello world!
                    </Route>
                </Switch>
        </div>
    );
}

export default App;
