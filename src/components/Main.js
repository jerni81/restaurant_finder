import React from "react";
import Form from "./Form";
import Options from "./Options";
import { Route, Switch, Redirect } from "react-router-dom";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      toOpts: false
    };
  }

  handleOptions = e => {
    // console.log('this is handleChoices', e);
    this.setState({
      options: e.options,
      toOpts: e.toOpts
    });
  };

  render() {
    console.log("this is options", this.state.options);
    return (
      <div className="App">
        <Switch>
          <Route
            path="/options"
            render={props => <Options options={this.state.options} />}
          />
          <Route
            exact
            path="/"
            render={props => {
              if (this.state.toOpts){
                return <Redirect to="/options" />
              }
              return <Form handleOptions={this.handleOptions} />}
            }
          />
        </Switch>
      </div>
    );
  }
}

export default Main;

//Redirect from https://tylermcginnis.com/react-router-programmatically-navigate/
//handleChange format from https://dev.to/zeyadetman/how-to-pass-state-between-components-in-reactjs-2pg1
