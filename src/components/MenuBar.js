import { React, useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import githubImage1 from "../images/githubnew.png";
import LinkedIn from "@material-ui/icons/LinkedIn";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";
import ContactIcon from "@material-ui/icons/ContactMail";
import IconButton from "@material-ui/core/IconButton";
import CvIcon from "@material-ui/icons/Description";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';



export default function MenuBar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button size='large' variant='contained' startIcon={<MenuIcon />} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
       
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem 
            onClick={() => window.open("https://github.com/zackhamin")}
          >
            {" "}
            <img
              style={{ margin: 10 }}
              src={githubImage1}
              height="50px"
              width="50px"
            ></img>{" "}</MenuItem>
        <MenuItem    onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1FM7oJbPHUc-ir0yEzqh-DA0bnsQZh8hr/view?usp=sharing"
                )
              }
            >
              {" "}
              <CvIcon
                style={{
                  margin: 10,
                  height: 50,
                  width: 50,
                  color: "FF9AA2",
                }}
              >
                {" "}
              </CvIcon>{" "}</MenuItem>

        <MenuItem 
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
           </MenuItem>

           <MenuItem> <Link to="/">
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
          </Link>
          </MenuItem>

           <MenuItem>
              <Link to="/Work">
                <WorkIcon
                  style={{ margin: 10, height: 50, width: 50, color: "#ffb3ba" }}
                >
                  {" "}
                </WorkIcon>{" "}
            </Link>
           </MenuItem>

           <MenuItem> 
               <Link to="/Contact">
                 <ContactIcon
                   style={{ margin: 10, height: 50, width: 50, color: "#D690D9" }}
                 />{" "}
             </Link>
           </MenuItem>
      </Menu>
    </div>
  );
}