import React from "react";
import { Link } from "react-router-dom";

class Final extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newSelected: []
    };
  }

  shuffleIt = () => {
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

    shuffle(this.props.selected);
    console.log(this.props.select);
    this.setState({
      newSelected: this.props.selected
    });
  };

  componentDidMount() {
    this.shuffleIt();
  }

  render() {
    console.log(this.state.newSelected);

    const finalChoice = this.state.newSelected.map((d, i) => {
      if (i < 1) {
        return (
          <div key={i} className="finalDiv">
            {d}
          </div>
        );
      }
    });

    return (
      <div className="finalContainer">
        <h1>Final</h1>
        {finalChoice}
        <h1>Lets Go Eat</h1>
        <footer>
          <Link to="/">
            <button>Start over if your really indecisive</button>
          </Link>
        </footer>
      </div>
    );
  }
}

export default Final;
