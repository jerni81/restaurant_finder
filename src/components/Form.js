import React from "react";
import BackupAPI from "./backup";
import axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      options: [],
      toOpts: true
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.makeApiCallYelp();

    // console.log("this is submit", this.state.value);
  };

  handleChange = e => {
    // console.log('this is Change');
    this.setState({
      value: e.target.value
    });
    // console.log(this.state.value);
  };

  makeApiCallYelp = async () => {
    let source = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=${this.state.value}&open_now=true&limit=50`;
    let key = process.env.REACT_APP_YELP_KEY;
    try {
      let response = await axios.get(source, {
        headers: {
          Authorization: `Bearer ${key}`
        }
      });
      function shuffle(array) {
        var m = array.length,
          t,
          i;
        while (m) {
          i = Math.floor(Math.random() * m--);
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
        return array;
      }

      shuffle(response.data.businesses);

      this.setState(
        {
          options: response.data.businesses
        },
        this.updateOptions
      );
      console.log("api call", this.state.options);
    } catch (err) {
      console.log("this is err", err);
      this.setState(
        {
          options: BackupAPI
        },
        this.updateOptions
      );
    }
  };

  updateOptions = () => {
    // console.log(this.state);
    this.props.handleOptions(this.state);
  };

  render() {
    return (
      <form>
        <h3>Don't know where to go?</h3>
        <h5>
          Tell us where you are,
          <br /> and we'll give you some suggestions!!
        </h5>
        <div className="formdiv">
          <input onChange={this.handleChange} placeholder="enter city or zip" />
          <br />
          <button onClick={this.handleSubmit}>Show Me Options</button>
        </div>
      </form>
    );
  }
}

export default Form;
