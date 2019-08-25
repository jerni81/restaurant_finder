import React from 'react'
import axios from 'axios'

class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: '',
      choices: [],
      next: true
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
    this.setState({
      choices: response.data.businesses
    }, this.updateChoices)
    // console.log(this.state.choices);
  }

  updateChoices = () => {
    // console.log(this.state);
    this.props.handleChoices(this.state)
  }

  render(){
    return(
      <form >
      <h2>Need some Ideas??</h2>
      <h3>Where are you?</h3>
        <input onChange={this.handleChange} placeholder='enter city or zip' />
        <br/>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default Form
