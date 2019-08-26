import React from "react";


class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      selected: []
    };
  }

  render() {
    // console.log("this is options page", this.props.options);

    function shuffle(array) {
      var m = array.length, t, i;
      while (m) {
        i = Math.floor(Math.random() * m--)
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
  return array;
}

// console.log('this is shuffle',shuffle(this.props.options));

    const theOptions =
      this.props.options.map((d,i) => {
        if (i < 8){
        return <button key={i}>{d.name}</button>
        }
      })

    return (
      <div className="container">
      <h1>This is options</h1>
      {theOptions}
      <h1>Selected</h1>

      </div>
    )
  }
}

export default Options;


//shuffle function from https://bost.ocks.org/mike/shuffle/
