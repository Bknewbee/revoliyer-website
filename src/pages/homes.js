import React, {Component} from 'react';

//required files
import "./home.css";
//import homeBg from "../images/homeBg.JPG";


class Home extends Component {

  render (){
    return (
      <div id="Home">
        <header className="">
          <div className="home-content">
            <h1>Rivoliyer..</h1>
            <p>
              We specialize in earth mover tyre and rim management, ownership/management has 21 years experience in management level in within jwaneng and orapa mines, tati nickel, mopane gold and tete mozambiqu.
              <br/><small>We are accredited to manage and train</small>
            </p>
            <div className="text-center">
            <a className="btn" role="button" href="/contact-us">Contact <br/> Us</a>
            </div>
          </div>
        </header>
        <main>
          Content
        </main>
      </div>
    )
  }
}

export default Home;
