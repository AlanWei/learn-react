import logo from "./logo.svg";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <div>Learn React</div>
      </header>
      <nav className="app-nav">
        <Link className="nav-item" to="/jsx">JSX</Link>
        <Link className="nav-item" to="/component-functional">Functional Component</Link>
        <Link className="nav-item" to="/component-class">Class Component</Link>
        <Link className="nav-item" to="/hooks-state">State Hooks</Link>
        <Link className="nav-item" to="/hooks-effect">Effect Hooks</Link>
        <Link className="nav-item" to="/context">Context</Link>
        <Link to="/invoices">React Router</Link>
      </nav>
    </div>
  );
}

export default App;
