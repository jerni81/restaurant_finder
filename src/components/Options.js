import React from 'react'
import { withRouter } from 'react-router'


class Options extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      options:[]
    }
  }
  // componentDidMount(){
  //   this.setState({
  //     options: this.props.options
  //   })
  // }
  render(){
    console.log('this is options page', this.props.options);
    return(
      <h1>This is options</h1>
    )
  }
}

export default withRouter(Options)


//why doesnt page render automaticly
//why arent options being passed down
