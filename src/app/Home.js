import React from 'react';
import './home.less';
import Hero from '../images/hero-image.png'
import claPic from '../images/calculator.png'
import timerPic from '../images/timer.png'
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (<div className="home">
    <div><img className="heroPic" src={Hero}></img></div>
    <div className="icon">
      <div>
      <NavLink to='/calculate'><img className="claPic" src={claPic}></img></NavLink>
      </div>
      <div>
        <NavLink to='/timer'><img className="timerPic" src={timerPic}></img></NavLink>
      </div>
    </div>
  </div>);
};

export default Home;