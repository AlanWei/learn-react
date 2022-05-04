import { Link } from "react-router-dom";

function String(props) {
  return <div>{props.text}</div>;
}

function Expression(props) {
  return <div>Amount: {props.amount}</div>;
}

function PropsDefault(props) {
  if (props.autocomplete) {
    return <div>autocomplete</div>;
  }
  return <div>{null}</div>;
}

function SpreadAttributes(props) {
  return (
    <div>
      <span
        style={{
          marginRight: 4,
        }}
      >
        {props.firstName}
      </span>
      <span>{props.lastName}</span>
    </div>
  );
}

function JSXDemo() {
  const list = ["a", "b", "c"];
  const props = {
    firstName: "Ben",
    lastName: "Hector",
  };
  return (
    <div className="app">
      <h1>JSX Demo</h1>
      <div>Hello</div>
      <String text="Hello World" />
      <Expression amount={1 + 2 + 3 + 4} />
      <PropsDefault autocomplete />
      <SpreadAttributes {...props} />
      {list.map((item) => (
        <div key={item}>{item}</div>
      ))}
      <Link className="backToHome" to="/">Back to Home</Link>
    </div>
  );
}

export default JSXDemo;
