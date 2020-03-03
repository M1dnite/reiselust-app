import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Travel from './NatureBackground.mp4';
import Logo from './wonderlust.png';

function App() {
  return (
    <div className="App">
      <div className="smooth">
      <header className="App-header">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#home"><img id="logoImg" src={Logo}></img></a></li>
          <li><a href="#price">Price</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </header>
      
      
      <section id="home">
        <header className="v-header container">
        {/* <div className="fullscreen-video-wrap">
          <video src={Travel} autoPlay={true} loop={true} muted={true}></video>
        </div> */}

        <div className="header-overlay"></div>

        <div className="header-content">
          <a href="#" className="btn btn-white btn-animated">Book Now</a>
          <a href="#" className="btn btn-white btn-animated">Create Your own Trip</a>
          <h1>Hello to Wonderlust Tours and Travels</h1>
        </div>
        </header>
      </section>
      <section id="about">
          <h2>About Page</h2>
      </section>
      <section id="price">
          <h2>Price Page</h2>
      </section>
      <section id="contact">
          <h2>Contact Page</h2>
      </section>
      </div>

    </div>
  );
}

export default App;
