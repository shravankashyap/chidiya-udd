import React from "react";
import HomeComponent from "../Components/Home"
import GameComponent from "../Components/GameComponent";
import { data } from "../Containers/data";

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
    console.log(data)
    return (
      <>{
        !pairs?<HomeComponent handleChangePair={this.handleChangePair}></HomeComponent>:<GameComponent pairs={pairs} data={data}></GameComponent>
      }
    
      </>
  );
}
}
export default Home;
