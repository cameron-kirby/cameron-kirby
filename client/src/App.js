import React, { useState, useRef } from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';
import { useOnClickOutside, useWindowDimensions } from "./hooks";
import { Navigation, Page } from "./components"
import { Home, Work, Profile, WorkStudy, NoMatch } from "./components/pages"


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
                    <Route path="/work/:workId">
                        <WorkStudy/>
                    </Route>
                    <Route exact path="/work">
                        <Page title="CK / Work">
                            <Work useWindowDimensions={useWindowDimensions}/>
                        </Page> 
                    </Route>
                    <Route path="/profile">
                        <Page title="CK / Profile">
                            <Profile/>
                        </Page>
                    </Route>
                    <Route exact path="/">
                        <Page title="CK / Home">
                            <Home/>
                        </Page>
                    </Route>
                    <Route path="*">
                        <Page title="CK / 404">
                            <NoMatch />
                        </Page>
                    </Route>
                </Switch>
        </div>
    );
}

export default App;
