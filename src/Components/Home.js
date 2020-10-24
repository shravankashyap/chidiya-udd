import React from "react";



class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state={}
  }
 

  render(){
  return (
    <div className="home-main">
      <div className="home-box">
        <div className="box-header" >Welecome To Game  </div>
        <div className="box-menu-Card">
          <div className="box-memu-card-div" style={{ marginLeft: 5 }}>
            <button className="pairs-button" onClick={e => { e.preventDefault(); this.props.handleChangePair(e, 2) }}>2 Pairs</button>
          </div>
          <div className="box-memu-card-div">
            <button className="pairs-button" onClick={e => { e.preventDefault();this.props.handleChangePair(e,4)}}>4 Pairs</button>
          </div>
          <div className="box-memu-card-div">
            <button className="pairs-button" onClick={e => { e.preventDefault(); this.props.handleChangePair(e, 6) }}>6 Pairs</button>
          </div>
        </div>
      </div>
    </div>
  );
}
}
export default HomeComponent;
