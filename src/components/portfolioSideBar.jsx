import React, { Component } from "react";
import githubImage1 from "../images/githubnew.png";
import LinkedinImage1 from "../images/linkedinnew.png";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import WorkIcon from "@material-ui/icons/Work";
import ContactIcon from "@material-ui/icons/ContactMail";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

class PortfolioSideBar extends Component {
  state = {};

  linkedInWebPage = () => {
    <a href="https://www.linkedin.com" target="_blank" />;
  };

  render() {
    return (
      <div>
        <div>
          <IconButton onClick={() => this.linkedInWebPage()}>
            {" "}
            <img
              style={{ margin: 10 }}
              src={githubImage1}
              height="50px"
              width="50px"
            ></img>{" "}
          </IconButton>
          <IconButton onClick={() => console.log("Clicked")}>
            {" "}
            <img
              style={{ margin: 10, marginBottom: 0 }}
              src={LinkedinImage1}
              height="50px"
              width="50px"
            ></img>{" "}
          </IconButton>
          <Link to="/">
            <IconButton>
              {" "}
              <HomeIcon
                style={{
                  margin: 10,
                  height: 50,
                  width: 50,
                  color: "#bae1ff",
                }}
              >
                {" "}
              </HomeIcon>{" "}
            </IconButton>
          </Link>
          <Link to="About">
            <IconButton>
              {" "}
              <InfoIcon
                style={{ margin: 10, height: 50, width: 50, color: "#baffc9" }}
              >
                {" "}
              </InfoIcon>{" "}
            </IconButton>
          </Link>
          <Link to="Work">
            <IconButton>
              <WorkIcon
                style={{ margin: 10, height: 50, width: 50, color: "#ffb3ba" }}
              >
                {" "}
              </WorkIcon>{" "}
            </IconButton>
          </Link>
          <Link to="Contact">
            <IconButton>
              <ContactIcon
                style={{ margin: 10, height: 50, width: 50, color: "#ffdfba" }}
              />{" "}
            </IconButton>
          </Link>
        </div>
      </div>
    );
  }
}

export default PortfolioSideBar;
