import { useState } from "react";
import Box from "@material-ui/core/Box";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import RUhorizontal from "../assets/ipo_horizontal.png";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#cc0033 !important",
    color: "white",
  },
  RUhorizontal: {
    maxWidth: "35vw",
    padding: "10px",
  },
  menuIcon: {
    marginLeft: "20px",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  list: {
    width: 250,
  },
  profile: {
    margin: "0 auto",
  },
  profileInfo: {
    margin: "10px",
  },
}));

export default function Drawer() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <AppBar className={classes.appBar} position="static">
        <Toolbar disableGutters>
          <IconButton
            onClick={() => setIsOpen(!isOpen)}
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
          <img
            src={RUhorizontal}
            className={classes.RUhorizontal}
            alt="RUhorizontal"
          />
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => {}}
      >
        <div className={classes.list}>
          <Box textAlign="center" p={2}>
            <Avatar alt="ipo_profile" src="#" className={classes.profile} />
            <div className={classes.profileInfo}> Name Goes Here </div>
          </Box>
          <Divider />
          <List>
            <ListItem button onClick={() => navigate("/tab3")}>
              <ListItemText primary={"Tools"} />
            </ListItem>
            <ListItem button onClick={() => navigate("/tab2")}>
              <ListItemText primary={"Settings"} />
            </ListItem>
            <ListItem button onClick={() => navigate("/tab3")}>
              <ListItemText primary={"Help"} />
            </ListItem>
            <ListItem button onClick={() => navigate("/tab2")}>
              <ListItemText primary={"Logout"} />
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
