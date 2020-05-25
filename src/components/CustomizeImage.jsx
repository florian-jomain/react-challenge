import React from "react";
import NavBar from "./NavBar";

export class CustomizeImage extends React.Component {
  state = {
    size: 0,
    url: "",
  };

  handleChange = (event) => {
    let key = event.target.name;
    this.setState({ [key]: event.target.value });
  };

  render() {
    const { size, url } = this.state;
    console.log(size);
    return (
      <React.Fragment>
        <NavBar />
        <div className='Customize'>
          <h1 className='Customize__header'>Customize image</h1>
          <input
            className='Customize__input'
            onChange={this.handleChange}
            type='text'
            placeholder='Enter your image URL'
            name='url'
          />
          <input
            className='Customize__slider'
            onChange={this.handleChange}
            type='range'
            min='0'
            max='200'
            name='size'
          />
          <p>
            {size} x {size} px
          </p>
          {url && (
            <img
              style={{ width: `${size}px`, height: `${size}px` }}
              className='Customize__image'
              src={url}
              alt='square silly thing'
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default CustomizeImage;
