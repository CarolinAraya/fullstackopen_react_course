import * as ReactDOM from "react-dom/client";
import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  setTimeout(() => setCounter(counter + 1), 1000);

  return <div>{counter}</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const startCounter = () => {
  root.render(<App />);
};
startCounter();
