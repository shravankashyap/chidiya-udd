import React from "react";
import Speech from 'speak-tts'


class GameComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state={}
  }
 
   
    render() {
        const { pairs, data } = this.props;
        console.log(data);
  return (
    <div className="home-main">
      <div className="game-box">
              <div className="game-box-div">
                  <div className=" box-user first-user">
                      <div style={{display:"grid"}}>
                          <button className="first-user-btn">User </button>
                          <div style={{display:"flex" ,flexWrap:"wrap",justifyContent:"center"}}>
                              <button className="yes-no-button">Yes</button>
                              <button className="yes-no-button">No</button>
                           </div>
                      </div>
                  </div>
                  <div className="box-user second-user" style={{display:pairs==2||pairs==4?"none":"block"}}>
                  <div style={{display:"grid"}}>
                          <button className="second-user-btn">User </button>
                          <div style={{display:"flex" ,flexWrap:"wrap",justifyContent:"center"}}>
                              <button className="yes-no-button">Yes</button>
                              <button className="yes-no-button">No</button>
                           </div>
                      </div>
                  </div>
              </div>
              <div className="game-box-div">
                  <div style={{display:"grid"}}>
                      <div className=" box-user third-user" style={{display:pairs==2?"none":"block"}}>
                      <div style={{display:"flex" ,flexWrap:"wrap",justifyContent:"center"}}>
                      <button className="third-user-btn">User </button>
                          
                              <div style={{ display: "grid",marginTop: 12 }} >
                              <button className="yes-no-button">Yes</button>
                              <button className="yes-no-button">No</button>
                           </div>
                           
                      </div>
                      </div>
                      {/* <div className=" box-user">4</div> */}
                 </div>
                  <div className="image-slider-main">
                       <div style={{marginTop:78}}>Chidiya udd?</div>
                  </div>
                  <div>
                      <div className=" box-user fourth-user" style={{display:pairs==2?"none":"block"}}>
                      <div style={{display:"flex" ,flexWrap:"wrap",justifyContent:"center"}}>
                      <div style={{display:"grid",marginTop: 12}} >
                              <button className="yes-no-button">Yes</button>
                              <button className="yes-no-button">No</button>
                           </div>
                            <button className="fourth-user-btn">User </button>
                          
                      </div>
                      </div>
                      {/* <div className=" box-user"></div> */}
                  </div>
              </div>
              <div className="game-box-div">
                  <div className=" box-user five-user">
                      <div style={{ display: "grid" }}>
                      <div style={{display:"flex" ,flexWrap:"wrap",justifyContent:"center"}}>
                              <button className="yes-no-button">Yes</button>
                              <button className="yes-no-button">No</button>
                           </div>
                          <button className="five-user-btn">User </button>
                          
                      </div>
              </div>
                  <div className="box-user six-user" style={{display:pairs==2||pairs==4?"none":"block"}}>
                      <div style={{ display: "grid" }}>
                      <div style={{display:"flex" ,flexWrap:"wrap",justifyContent:"center"}}>
                              <button className="yes-no-button">Yes</button>
                              <button className="yes-no-button">No</button>
                           </div>
                          <button className="six-user-btn">User </button>
                          
                      </div>
              </div>
              </div>
      </div>
    </div>
  );
}
}
export default GameComponent;
