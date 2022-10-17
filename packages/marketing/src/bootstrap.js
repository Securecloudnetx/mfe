import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Mount function to start app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

//In dev or isolation call mount now
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}
//Run app through container
export { mount };
