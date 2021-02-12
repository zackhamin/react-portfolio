import React, { Component } from "react";
import { Paper } from "@material-ui/core";
import PortfolioHead from "./PortfolioHeader";
import PortfolioBody from "./portfolioBody";
import PortfolioSkills from "./PortfolioSkills";
import PortfolioFooter from "./PortfolioFooter";
import PortfolioSideBar from "./PortfolioSideBar";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "space-between",
            height: 1000,
            width: 75,
            zIndex: 1,
            position: "fixed",
          }}
        >
          <PortfolioSideBar />
        </div>

        <div
          style={{
            marginLeft: 60,
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: 200,
            justifyContent: "center",
            zIndex: 0,
          }}
        >
          <PortfolioHead />
        </div>

        <div
          style={{
            display: "flex",
            height: 300,
            width: "100%",
            marginTop: 30,
            marginBottom: 50,
            marginLeft: 80,
            justifyContent: "center",
            zIndex: 0,
          }}
        >
          <PortfolioBody />
        </div>

        <PortfolioFooter style={{}} />

        {/* <div style={{display: 'flex', width: '100%', height:175, }}> 
                 <Paper elevation={3} style={{width: '100%', height:275, padding:10, margin: 20, }}> 
                     <PortfolioSkills />
                 </Paper>
              </div>  */}
      </div>
    );
  }
}

export default Portfolio;
