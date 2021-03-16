import "./App.css";
import Logo from "./components/Logo/Logo";
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        SERVICES PROVIDED FOR THE NEEDY!
        <header className="App-header">
          
          <Logo />
          <h4>Your Location Finder</h4>
        </header>
      </header>
      <main>
        <Forecast />{" "}
      </main>
      <footer>Page created by TEAM Sawyer, Wade, Shawn, Steve, Scott!!</footer>
    </div>
  );
}

export default App;
//notes here
