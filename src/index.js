import React from "react";
import * as ReactDOMClient from "react-dom/client";

const App = (props) => {
  const { counter } = props;
  return <div>{counter}</div>;
};

let counter = 1;

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

const refresh = () => {
  root.render(<App counter={counter} />);
};

refresh();
counter += 1;
refresh();
counter += 1;
refresh();
