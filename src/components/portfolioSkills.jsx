import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import reactImage from '../images/logo192.png'
import jsImage from '../images/javascript.png'
import nodeImage from '../images/node.png'
import kotlinImage from '../images/kotlin.png'
import pythonImage from '../images/python.png'
import swiftImage from '../images/swift.png'

class PortfolioSkills extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{display: 'row', alignContent:'left'}}>
                <h2></h2>
                
                    <div style={{ display:'flex'}} className="progress" style={{height:25}} > 
                        <div className="progress-bar progress-bar-info progress-bar-striped" role="progressbar" 
                                aria-valuenow='40' aria-valuemin="0" aria-valuemax="100" style={{width:'40%', backgroundColor:'#2ae4ff', fontSize:20}} >
                        </div>
                        <img style={{marginLeft:0}}src={reactImage}  height="25px" width="25px"></img>
                    </div>

                    <div className="progress" style={{height:25, marginTop:15}}>
                        <div className="progress-bar progress-bar-info progress-bar-striped" role="progressbar" 
                            aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:'30%', backgroundColor: 'yellow', color:'black',fontSize:20}}>
                        </div>
                        <img src={jsImage} alt="piechart" height="25px" width="25px"></img>
                    </div>

                    <div className="progress" style={{height:25, marginTop:15}}>
                        <div className="progress-bar progress-bar-info progress-bar-striped" role="progressbar" 
                            aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{borderColor:'black', width:'20%', backgroundColor: 'green'}}>
                        </div>
                        <img style={{marginLeft:0}}src={nodeImage}  height="25px" width="25px"></img>
                    </div>

                     <div className="progress" style={{height:25, marginTop:15}}>
                        <div className="progress-bar progress-bar-info " role="progressbar" 
                        aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:'50%',backgroundImage: 'linear-gradient(to left bottom, #463d96, #9a3c8f, #d14a7b, #ef6d63, #f69a52)' ,fontSize:20}}>
                        </div>
                        <img style={{marginLeft:0}}src={kotlinImage}  height="25px" width="30px"></img>
                    </div>


                    <div className="progress" style={{height:25, marginTop:15}}>
                        <div className="progress-bar progress-bar-info " role="progressbar" 
                        aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:'30%',backgroundImage: 'linear-gradient(to right, #ffff66 44%, #0066ff 103%)', color:'black'}}>
                        </div>
                        <img style={{marginLeft:0}}src={pythonImage}  height="25px" width="30px"></img>
                    </div>

                    <div className="progress" style={{height:25, marginTop:15}}>
                        <div className="progress-bar progress-bar-info " role="progressbar" 
                        aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:'30%', backgroundImage: 'linear-gradient(to left, #ff9900 2%, #ffffff 100%)', color:'black'}}>
                        </div>
                        <img style={{marginLeft:0}}src={swiftImage}  height="25px" width="30px"></img>
                    </div>

                
            </div>
         );
    }
}
 
export default PortfolioSkills;