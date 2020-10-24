import React from "react";
import HomeComponent from "../Components/Home"
import GameComponent from "../Components/GameComponent";

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      pairs:null
    }
  }
  handleChangePair = (e,value) => {
    this.setState({pairs:value});
  }
  render() {
    const { pairs } = this.state;
    return (
      <>{
        !pairs?<HomeComponent handleChangePair={this.handleChangePair}></HomeComponent>:<GameComponent pairs={pairs}></GameComponent>
      }
    
      </>
  );
}
}
export default Home;
