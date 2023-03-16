import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <NavLink to='/qanda'>
        <div>Q and A</div>
      </NavLink>
      <NavLink to='/correctgrammer'>
        <div>Correct english grammer</div>
      </NavLink>
      <NavLink to='/translatetosimple'>
        <div>Translates difficult text into simpler concepts</div>
      </NavLink>
    </div>
  );
};

export default Home;
