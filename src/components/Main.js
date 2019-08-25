import React from 'react';
import axios from 'axios'
import Form from './Form'

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      choices: [],
    }
  }

  handleChoices = (e) => {
    console.log('this is handleChoices', e);
  }


  // handleSubmit = (e) => {
  //     e.preventDefault()
  //     this.makeApiCallYelp()
  //     console.log('this is submit', this.state.value);
  //   }

  //   makeApiCallYelp = async () => {
  //     let source = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=${this.state.value}&open_now=true&limit=50`
  //     let key = process.env.REACT_APP_YELP_KEY;
  //     let response = await axios.get(source, {
  //       headers: {
  //         'Authorization' : `Bearer ${key}`,
  //       }
  //     });
  //  console.log(response);
  // }

  render(){
    return (
      <div className="App">
        <h2>Need some Ideas??</h2>
        <h3>Where are you?</h3>
        <Form handleChoices={this.handleChoices}/>
      </div>
    );
  }
}

export default Main;
