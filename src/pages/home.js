import React, {Component} from 'react';

//import homeBg from '../images/homeBg.JPG';
import sandBlasting from "../images/sandBlasting.JPG";
import earthMovingTire from "../images/earthMovingTire.JPG";
import earthMovingTireManagement from "../images/earthMovingTireManagement.JPG";
import contactBG from '../images/contact-image-002-contact.jpg';

import "./home.css";

class Home extends Component {

  render (){
    return (
      <div id="Home" style={{backgroundImage: "url(/images/001.png)"}}>

        <div className="head" style={{backgroundSize: "cover",backgroundRepeat: "no-repeat"}}>
          <div className="home-content">
            <h1>Rivoliyer..</h1>
            <p className="caps">
              We specialize in earth mover tyre and rim management, ownership/management has 21 years experience in management level in within jwaneng and orapa mines, tati nickel, mopane gold and tete mozambiqu.
              <br/><small>We are accredited to manage and train</small>
            </p>
            <div className="text-center">
            <a className="btn button" href="/contact-us">Contact <br/> Us</a>
            </div>
          </div>

        </div>
        <hr/>
        <div className="main content">
          <h2 className="text-center">Our Work</h2>
          <div className="card-deck container-fluid">
            <div className="card" >
              <img className="card-img-top" src={sandBlasting} alt="Sand Blasting"/>
              <div className="card-body">
                <p className="card-text">We supply EMV tire & rim accessories(HALTEC) portable electrical, hydraulic machines and tires.</p>
              </div>
              <a className="card-header" href="/supply">We Supply</a>
            </div>
            <div className="card">
              <img className="card-img-top" src={earthMovingTire} alt="Earth Moving Tire"/>
              <div className="card-body">
                <p className="card-text">Social Performance Policy is set to promote and encourage our social responsibility </p>
              </div>
              <a className="card-header" href="/social-work">Social Work</a>
            </div>
            <div className="card">
              <img className="card-img-top" src={earthMovingTireManagement} alt="Earth Moving Tire Management"/>
              <div className="card-body">
                <p className="card-text">We are qualified and accredited to train and advice in the tire and rim field</p>
              </div>
              <a className="card-header" href="/management-training">Earth Moving Tires and Rim Management Training</a>
            </div>
          </div>
          <hr/>
        </div>
        <div className="text-center contact-div" style={{position: "relative"}}>
          <img className="img-fluid" src={contactBG}></img>
          {/*
          <h2>Reach Out to Us</h2>
          <p>Work with us, Enquire about something</p>
          */}

          <div className="d-flex justify-content-center">
            <div className="buttonContact">
              <a className="btn button center " href="/contact-us">Contact <br/> Us</a>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Home;
