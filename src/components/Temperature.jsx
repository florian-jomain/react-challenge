import React from "react";
import NavBar from "./NavBar";

export class Temperature extends React.Component {
  state = {
    temperature: 0,
  };

  handleChange = (event) => {
    this.setState({ temperature: event.target.value });
  };

  render() {
    const { temperature } = this.state;

    return (
      <React.Fragment>
        <NavBar />
        <div className='Temperature'>
          <div className='Temperature__group'>
            <h1 className='Temperature__header'>Temperature</h1>
            <input
              onChange={this.handleChange}
              className='Temperature__input'
              type='number'
              placeholder='Temperature in °C'
              min='0'
              name='temperature'
            />
            {temperature < 10 && (
              <div className='Temperature__result'>
                <p style={{ color: "blue" }}>
                  It's cold{" "}
                  <span role='img' aria-label='snow'>
                    ❄️
                  </span>
                </p>
              </div>
            )}
            {temperature >= 10 && temperature <= 30 && (
              <div className='Temperature__result'>
                <p style={{ color: "black" }}>
                  It's nice{" "}
                  <span role='img' aria-label='flower'>
                    🌼
                  </span>
                </p>
              </div>
            )}
            {temperature > 30 && (
              <div className='Temperature__result'>
                <p style={{ color: "red" }}>
                  It's warm{" "}
                  <span role='img' aria-label='snow'>
                    ☀️
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Temperature;
