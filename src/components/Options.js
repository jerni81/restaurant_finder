import React from "react";

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      toFinal: true,
      toOpts: false
    };
  }

  updateSelected = () => {
    this.props.handleSelected(this.state);
  };

  handleSelection = e => {
    console.log("this is selection", e.target.value);
    let choice = e.target.value;
    this.setState((prevState, props) => ({
      selected: [...prevState.selected, choice]
    }));
  };

  componentDidUpdate(prevState) {
    console.log("this is compDidUpdate,", this.state.selected);
    if (this.state.selected.length === 4 && this.state.toFinal === true) {
      this.setState({
        toFinal: false
      });
      this.updateSelected();
    }
  }

  render() {
    // console.log("this is options page", this.props.options);
    console.log("this is selected", this.state.selected);

    const theOptions = this.props.options.map((d, i) => {
      if (i < 8) {
        return (
          <div key={i}>
            <p>{d.name}</p>
            <button onClick={this.handleSelection} value={d.name}>
              select
            </button>
          </div>
        );
      }
    });

    const theSelected = this.state.selected.map((d, i) => {
      return <div key={i}>{d}</div>;
    });

    return (
      <div className="container">
        <h1>This is options</h1>
        <div>{theOptions}</div>
        <h1>Selected</h1>
        <div>{theSelected}</div>
      </div>
    );
  }
}

export default Options;

//shuffle function from https://bost.ocks.org/mike/shuffle/
