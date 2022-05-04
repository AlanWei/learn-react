import { Link } from "react-router-dom";

function Demo(props) {
  return (
    <div className="app">
      <h1>Functional Component Demo</h1>
      <div>{props.text}</div>
      <Link className="backToHome" to="/">Back to Home</Link>
    </div>
  );
}

export default Demo;
