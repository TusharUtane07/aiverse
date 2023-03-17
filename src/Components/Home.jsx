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
      <NavLink to='/convetjstopy'>
        <div>Converts Javascript code to Python code</div>
      </NavLink>
      <NavLink to='/jsoneliner'>
        <div>Converts Javascript function to one line code</div>
      </NavLink>
    </div>
  );
};

export default Home;
