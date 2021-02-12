import React from 'react'
import PortfolioSkills from '../components/PortfolioSkills'
import { Paper } from "@material-ui/core";

function aboutMe() {
    return (
        
         <div style={{display: 'flex',flexDirection:'column', width:'100%', height:'100%',alignContent:'center',
         marginLeft:100,
                   }}>
            <div style={{display:'flex',height:350, width:'90%', backgroundColor:'black'}}>

            </div>

            <div style={{display: 'flex', width:'90%', height:260,marginTop:25}}>
                 <Paper elevation={3} style={{width:'100%', height:260, padding:20 }}> 
                     <PortfolioSkills />
                 </Paper>
              </div> 
        </div>
    )
}

export default aboutMe
