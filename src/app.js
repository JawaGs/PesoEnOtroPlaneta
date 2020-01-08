import React from "react";
import { hot } from 'react-hot-loader/root';
import Planetas from "./components/planetas";
import Instrucciones from "./components/instrucciones";

class App extends React.Component {
  render() {
    return(
      <div>
        <Instrucciones />
        <Planetas />
      </div>
    )
  }
}

export default hot(App);