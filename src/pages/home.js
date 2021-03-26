import React, {Component} from 'react';
import {HashRouter, Route, Link} from 'react-router-dom';
import homeBg from '../images/homeBg.JPG';
import sandBlasting from "../images/sandBlasting.JPG";
import earthMovingTire from "../images/earthMovingTire.JPG";
import earthMovingTireManagement from "../images/earthMovingTireManagement.JPG";

import "./home.css";

class Home extends Component {

  render (){
    return (
      <div id="Home" style={{backgroundImage: "url(/images/001.png)"}}>
      <HashRouter basename="/">
        <div className="head" style={{backgroundSize: "cover",backgroundRepeat: "no-repeat"}}>
          <div className="home-content">
            <h1>Rivoliyer..</h1>
            <p className="caps">
              We specialize in earth mover tyre and rim management, ownership/management has 21 years experience in management level in within jwaneng and orapa mines, tati nickel, mopane gold and tete mozambiqu.
              <br/><small>We are accredited to manage and train</small>
            </p>
            <div className="text-center">
            <Link className="btn button" to="/contact-us">Contact <br/> Us</Link>
            </div>
          </div>

        </div>
        <hr/>
        <div className="main content">
          <h2 className="text-center">Our Work</h2>
          <div className="card-deck container-fluid">
            <div class="card" style={{width: "18rem;"}}>
              <img class="card-img-top" src={sandBlasting} alt="Sand Blasting"/>
              <div class="card-body">
                <p class="card-text">We supply EMV tyre & rim accessories(HALTEC) portable electrical, hydraulic machines and tyres.</p>
              </div>
              <Link className="card-header" to="/supply">We Supply</Link>
            </div>
            <div class="card" style={{width: "18rem;"}}>
              <img class="card-img-top" src={earthMovingTire} alt="Earth Moving Tire"/>
              <div class="card-body">
                <p class="card-text">Social Performance Policy is set to promote and encourage our social resposibility </p>
              </div>
              <Link className="card-header" to="/social-work">Social Work</Link>
            </div>
            <div class="card" style={{width: "18rem;"}}>
              <img class="card-img-top" src={earthMovingTireManagement} alt="Earth Moving Tire Management"/>
              <div class="card-body">
                <p class="card-text">We are qualified and accredited to train and advice in the tyre and rim field</p>
              </div>
              <Link className="card-header" to="/management-training">Earth Moving Tyres and Rim Management Training</Link>
            </div>
          </div>
          <hr/>
          <div className="text-center">
            <h2>Reach Out to Us</h2>
            <p>Work with us, Enquire about something</p>
            <Link className="btn button center" to="/contact-us">Contact <br/> Us</Link>
          </div>
        </div>
        </HashRouter>
      </div>
    )
  }
}

export default Home;
