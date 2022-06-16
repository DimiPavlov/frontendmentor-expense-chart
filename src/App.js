import "./App.css";
import Balance from "./components/balance/Balance";
import Graph from "./components/graph/Graph";

function App() {
  return (
    <div className="app">
      <header>
        <Balance />
      </header>
      <main>
        <Graph />
      </main>
    </div>
  );
}

export default App;
