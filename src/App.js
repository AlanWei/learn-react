import logo from './logo.svg';
import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        Learn React
      </header>
      <nav className="app-nav">
        <Link to="/jsx">JSX</Link>
        <Link to="/component-functional">Functional Component</Link>
        <Link to="/component-class">Class Component</Link>
        <Link to="/hooks-state">State Hooks</Link>
        <Link to="/hooks-effect">Effect Hooks</Link>
      </nav>
    </div>
  );
}

export default App;
