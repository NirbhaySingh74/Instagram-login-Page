import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./component/Body";
const App = () => {
  return (
    <>
      <Body />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
