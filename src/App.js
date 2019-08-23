import React from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      entity_id: ''
    }
  }

  handleSubmit = (e) => {
      e.preventDefault()
      this.makeApiCallYelp()
      console.log('this is submit', this.state.value);
    }

  handleChange = (e) => {
    // console.log('this is Change');
    this.setState({
      value: e.target.value
    })
      // console.log(this.state.value);
  }

    makeApiCallYelp = async () => {
      let source = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=${this.state.value}&open_now=true&limit=50`
      let key = process.env.REACT_APP_YELP_KEY;
      let response = await axios.get(source, {
        headers: {
          'Authorization' : `Bearer ${key}`,
        }
      });
   console.log(response);
  }

  render(){
    return (
      <div className="App">
        <h1>Whats for dinner?</h1>
        <form >
          <input onChange={this.handleChange} placeholder='enter city or zip' />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
