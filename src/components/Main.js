import React from "react";
import Form from "./Form";
import Options from "./Options";
import Final from "./Final";
import { Route, Switch, Redirect } from "react-router-dom";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      toOpts: false,
      selected: [],
      toFinal: false
    };
  }

  handleOptions = e => {
    // console.log('this is handleChoices', e);
    this.setState({
      options: e.options,
      toOpts: e.toOpts
    });
  };

  handleSelected = e => {
    // console.log("this is handleSelected", e);
    this.setState({
      selected: e.selected,
      toFinal: e.toFinal,
      toOpts: e.toOpts
    });
  };

  render() {
    // console.log('this is Main - props', this.props)
    // console.log("this is options", this.state.options);
    console.log("yo yo ", this.state);
    return (
      <div className="App">
        <Switch>
          <Route
            path="/options"
            render={props => {
              if (this.state.toFinal === true && this.state.toOpts === false) {
                return <Redirect to="/final" />;
              } else {
                return (
                  <Options
                    options={this.state.options}
                    handleSelected={this.handleSelected}
                  />
                );
              }
            }}
          />
          <Route
            path="/final"
            render={props => <Final selected={this.state.selected} />}
          />
          <Route
            exact
            path="/"
            render={props => {
              if (this.state.toOpts) {
                return <Redirect to="/options" />;
              } else {
                return <Form handleOptions={this.handleOptions} />;
              }
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default Main;

//Redirect from https://tylermcginnis.com/react-router-programmatically-navigate/
//handleChange format from https://dev.to/zeyadetman/how-to-pass-state-between-components-in-reactjs-2pg1
