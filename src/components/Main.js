import React from 'react';
// import axios from 'axios'
import Form from './Form'
import Options from './Options'
import { Route, Switch, Redirect } from 'react-router-dom'

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      choices: [],
      next: false
    }
  }

  handleChoices = (e) => {
    // console.log('this is handleChoices', e);
    this.setState({
      choices: e.choices,
      next: e.next
    })
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



  // <Form handleChoices={this.handleChoices}/>
  // <Options />

  render(){
        console.log('this is choices', this.state.choices);

    if (this.state.next === true) {
       return <Redirect to='/options' />
     }

    return (
      <div className="App">
      <Switch>
        <Route to='/options' component={Options} />
        <Route exact path='/' render={(props)=><Form handleChoices={this.handleChoices}/>}/>
      </Switch>
      </div>
    );
  }
}

export default Main;


//Redirect from https://tylermcginnis.com/react-router-programmatically-navigate/
//handleChange format from https://dev.to/zeyadetman/how-to-pass-state-between-components-in-reactjs-2pg1
