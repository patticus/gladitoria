import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import CharSelect from "./CharSelect";
import Staging from "./Staging";
import Arena from "./Arena";
import "./index.css";

function Main() {
  // state = {
  //   data: null
  // };

  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  async function callBackendAPI() {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  useEffect(() => {
    callBackendAPI()
      .then((res) => this.setState({ data: res.express }))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="content">
      <Route exact path="/" component={Home} />
      <Route path="/charselect" component={CharSelect} />
      <Route path="/staging" component={Staging} />
      <Route path="/arena" component={Arena} />
    </div>
  );
}

export default Main;
