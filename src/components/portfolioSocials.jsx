import React, { Component } from 'react';
import githubImage from '../images/github.png'
import LinkedinImage from '../images/linkedin.png'

class PortfolioSocials extends Component {
    state = {  }


    render() { 


        return ( 
        
        <div>
            <div>
                <img style={{marginRight:20}}src={githubImage}  height="50px" width="50px"></img>
                <img style={{marginLeft:20}}src={LinkedinImage}  height="50px" width="50px"></img>
            </div>
        </div> 
        );
    }
}
 
export default PortfolioSocials;