import React from "react";
import NavBar from "./NavBar";

export class Temperature extends React.Component {
  state = {
    temperature: 0,
  };

  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default Temperature;
