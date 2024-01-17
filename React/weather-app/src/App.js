import logo from "./logo.svg";
import "./App.css";
import Select from "./components/Select";
import Detail from "./components/Detail";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <Select />
        <Detail />
      </div>
    </WeatherProvider>
  );
}

export default App;
