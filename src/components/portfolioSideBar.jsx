import React, { Component } from 'react';
import githubImage1 from '../images/githubnew.png';
import LinkedinImage1 from '../images/linkedinnew.png';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import ContactIcon from '@material-ui/icons/ContactMail';
import IconButton from '@material-ui/core/IconButton'
class PortfolioSideBar extends Component {
    state = {  }


    render() { 


        return ( 
        
        <div>
            <div>
                <IconButton>  <img style={{margin:10}}src={githubImage1}  height="50px" width="50px"></img> </IconButton>
                <IconButton>  <img style={{margin:10, marginBottom:0}}src={LinkedinImage1}  height="50px" width="50px"></img> </IconButton>
                <IconButton> <HomeIcon style={{ margin:10 ,height:50 , width:50, color:'#bae1ff', }}> </HomeIcon> </IconButton>
                <IconButton> <InfoIcon style={{ margin:10 ,height:50 , width:50, color:'#baffc9'}}> </InfoIcon> </IconButton>
                <IconButton> <WorkIcon style={{ margin:10 ,height:50 , width:50, color:'#ffb3ba'}}> </WorkIcon> </IconButton>
                <IconButton> <ContactIcon style={{ margin:10 ,height:50 , width:50, color:'#ffdfba'}}/> </IconButton>
                
            </div>

        </div> 
        );
    }
}
 
export default PortfolioSideBar;