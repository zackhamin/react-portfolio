import React, { Component } from 'react';
import signature from '../images/signature.png'

class PortfolioHead extends Component {
    state = {  }


    render() { 


        return ( 
        
        <div>
                <img style={{marginLeft:0}}src={signature}  height="200px" width="500px"></img>
        </div> );
    }
}
 
export default PortfolioHead;