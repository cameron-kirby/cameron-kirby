import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';
//components
import { HomeSlide } from "./components"
const anchors = ["one", "two", "three"]

function App() {
  return (
    <div className="App">
      <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
        onLeave={(origin, destination, direction) => {
          console.log("onLeave event", { origin, destination, direction });
        }}
        render={({ state, fullpageApi }) => {
          console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

          return (
            <div>
              <div className="section">
                <HomeSlide />
              </div>
              <div className="section">
                <h3>two</h3>
              </div>
              <div className="section">
                <h3>three</h3>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
}

export default App;
