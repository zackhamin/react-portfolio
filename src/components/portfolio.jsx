import React, { Component } from 'react';
import { Paper } from "@material-ui/core";
import PortfolioHead from './portfolioHeader';
import PortfolioBody from './portfolioBody';
import PortfolioSkills from './portfolioSkills';
import PortfolioSocials from './portfolioSocials';


class Portfolio extends Component {
   


    render() { 

        return ( 
        <div style={{display: 'row', width:'100%', height:'100%'}}>

            <div style={{ display: 'flex', flexDirection: 'row', width: '100%',  justifyContent: 'center', margin:0}}>
                    <PortfolioHead />
            </div>

             <div style={{display: 'flex', width:'100%', height:100, justifyContent:'center'}}>
                    <PortfolioSocials />
                    {/* <PortfolioBody /> */}
             </div>

            <div style={{display: 'flex', width: '100%', height:275, }}> 
                <Paper elevation={3} style={{width: '100%', height:275, padding:10, margin: 20, }}> 
                    <PortfolioSkills />
                </Paper>
             </div> 

             <div style={{display: 'flex', width:'100%', height:100, justifyContent:'center', marginTop:50, marginLeft:0}}>
                    <PortfolioBody />
             </div>
        </div>

         );
    }
}
 
export default Portfolio;