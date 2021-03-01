import React, { Component } from "react";
import githubImage1 from "../images/githubnew.png";
import LinkedIn from "@material-ui/icons/LinkedIn";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";
import ContactIcon from "@material-ui/icons/ContactMail";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import { LinkedCamera } from "@material-ui/icons";

class PortfolioSideBar extends Component {
  state = {};

  render() {
    return (
      <div>
        <div>
          <IconButton
            onClick={() => window.open("https://github.com/zackhamin")}
          >
            {" "}
            <img
              style={{ margin: 10 }}
              src={githubImage1}
              height="50px"
              width="50px"
            ></img>{" "}
          </IconButton>

          <Link>
            <IconButton
              onClick={() =>
                window.open("https://www.linkedin.com/in/ishaqamin/")
              }
            >
              <LinkedIn
                style={{
                  margin: 10,
                  height: 50,
                  width: 50,
                  color: "#2867B2",
                }}
              >
                {" "}
              </LinkedIn>{" "}
            </IconButton>
          </Link>

          <Link to="About">
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
                style={{ margin: 10, height: 50, width: 50, color: "#D690D9" }}
              />{" "}
            </IconButton>
          </Link>
        </div>
      </div>
    );
  }
}

export default PortfolioSideBar;
