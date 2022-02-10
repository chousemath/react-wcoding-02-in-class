import "./App.css";
import CounterButton from "./components/CounterButton";
import ColorButton from "./components/ColorButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ColorButton />
        <br />
        <br />
        <ColorButton />
      </header>
    </div>
  );
}

export default App;
