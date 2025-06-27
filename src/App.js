import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link className="App-link" to={`/`}>
          Link to "/"
        </Link>
        <a className="App-link" href={`/`}>
          a to "/"
        </a>
        <Link className="App-link" to={`/datasets`}>
          Link to "/datasets"
        </Link>
        <a className="App-link" href={`/datasets`}>
          a to "/datasets"
        </a>
      </header>
    </div>
  );
}

export default App;
