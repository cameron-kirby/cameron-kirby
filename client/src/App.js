import React, { useState, useRef } from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';
import { useOnClickOutside } from "./hooks";
import { Navigation } from "./components"
import { Home } from "./components/pages"


function App() {
    const [navOpen, setNavOpen] = useState(false); // Nav state
    const node = useRef(); // Reference for clicking outside of menu to close
    useOnClickOutside(node, () => setNavOpen(false)); // Hook for closing menu when clicked out of

    return (
        <div className="App">
            <div ref={node}>
                <Navigation navOpen={navOpen} setNavOpen={setNavOpen}/>
            </div>
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
                        <Home/>
                    </Route>
                </Switch>
        </div>
    );
}

export default App;
