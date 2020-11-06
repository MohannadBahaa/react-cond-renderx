import Rcrx from "./dist";
import logo from "./logo.svg";
import "./App.css";
import Odd from "./Odd";
import Even from "./Even";

function App() {
  let number = 0;
  const isOdd = () => number % 2 !== 0;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {Rcrx.predicate(isOdd).exec({
          components: [
            {
              comp: <Odd />,
            },
            {
              comp: <Even />,
            },
          ],
        })}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
