import React, {Component} from 'react';

class ContactUs extends Component {

  render(){
    return(
      <div className="container">
        <h1>Contact Us</h1>
        <p>Phone contact details!</p>
        <p>Send us an email for further queries.</p>
        <form>
          <textarea
            id="name"
            name="name"
            placeholder="your name"
            required
            style={{ width: "100%" }}
            rows={1}
          />
          <br />
            <textarea
              id="email"
              name="email"
              placeholder="your email address"
              required
              style={{ width: "100%" }}
              rows={1}
            />
            <br />
            <textarea
              id="feedback"
              name="feedback"
              placeholder="what would you like to chat about?"
              required
              style={{ width: "100%", height: "250px" }}
            />
            <br />
            <input
              type="button"
              value="Send"
              className="ui button"
              style={{
                fontFamily: "Amatic SC",
                fontSize: "20px",
                color: "blue"
              }}
            />
        </form>
      </div>
    )
  }
}

export default ContactUs;
