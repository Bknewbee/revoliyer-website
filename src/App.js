//import logo from './logo.svg';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
//required files
import './App.css';
import Home from "./pages/home";
import About from "./pages/about";
import TermsOfUse from "./pages/terms-of-use";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href="/">Rivoliyer</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li><a className="nav-link" href="/">Home</a></li>
                <li><a className="nav-link" href="/about">About Us<span className="sr-only">(current)</span></a></li>
                <li><a className="nav-link" href="/contact">Contact Us</a></li>
              </ul>
            </div>
        </nav>


        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/terms-of-use" component={TermsOfUse}></Route>
        </Switch>
      </Router>
      Pages
      <footer>
        <div className="row">
          <div className="col">
            <p>Email: rivoliyer@gmail.com</p>
          </div>
          <div className="col">
            <ul>
              <li><a href="/terms-of-use">Terms of use</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <hr/>
          <p className=""> 2021, LLC. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
