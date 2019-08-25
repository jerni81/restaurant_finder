import React from 'react';
// import axios from 'axios'
import Form from './Form'
import Options from './Options'
import { Route, Switch, Redirect } from 'react-router-dom'

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      options: [],
      toOpts: false
    }
  }

  handleOptions = (e) => {
    // console.log('this is handleChoices', e);
    this.setState({
      options: e.options,
      toOpts: e.toOpts
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
        console.log('this is options', this.state.options);

    if (this.state.toOpts === true) {
       return <Redirect to='/options' render={(props)=><Options options={this.state.options}/>} />
     }

    return (
      <div className="App">
      <Switch>
        <Route path='/options' render={(props)=><Options options={this.state.options}/>} />
        <Route exact path='/' render={(props)=><Form handleOptions={this.handleOptions}/>}/>
      </Switch>
      </div>
    );
  }
}

export default Main;


//Redirect from https://tylermcginnis.com/react-router-programmatically-navigate/
//handleChange format from https://dev.to/zeyadetman/how-to-pass-state-between-components-in-reactjs-2pg1
