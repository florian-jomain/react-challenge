import React from "react";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className='Home'>
        <h1>
          This is the home{" "}
          <span role='img' aria-label='home'>
            🏡
          </span>
        </h1>
      </div>
    </React.Fragment>
  );
};

export default Home;
