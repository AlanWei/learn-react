import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Demo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="app">
      <h1>Effect Hooks Demo</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <Link className="backToHome" to="/">
        Back to Home
      </Link>
    </div>
  );
}

export default Demo;
