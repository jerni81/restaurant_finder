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
    if (this.state.selected.includes(choice)) {
      const filtered = this.state.selected.filter(
        restuarant => restuarant !== choice
      );
      this.setState({
        selected: filtered
      });
    } else {
      this.setState((prevState, props) => ({
        selected: [...prevState.selected, choice]
      }));
    }
  };

  submitChoices = () => {
    this.setState({
      toFinal: false
    });
    this.updateSelected();
  };

  render() {
    // console.log("this is options page", this.props.options);
    console.log("this is selected", this.state.selected);

    const theOptions = this.props.options.map((d, i) => {
      let selected = this.state.selected.includes(d.name);
      if (i < 8) {
        return (
          <div key={i} className="optionDiv">
            <h3>{d.name}</h3>
            <p>{d.categories[0].title}</p>
            <button
              onClick={this.handleSelection}
              value={d.name}
              className={selected ? "selected" : ""}
            >
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
      <div className="optionsContainer">
        <div>
          <h1>Choose a few that sound good!</h1>
          <div className="optionsDiv">{theOptions}</div>
        </div>
        <div className="selectButton">
          <button onClick={this.submitChoices}>Submit Choices</button>
          <div className="selectedDiv">
            <h1>Selected</h1>
            <div>{theSelected}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Options;

//shuffle function from https://bost.ocks.org/mike/shuffle/
