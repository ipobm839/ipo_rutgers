import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@material-ui/core";
import RUhorizontal from "../assets/ipo_horizontal.png";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#cc0033 !important",
    color: "white",
  },
  RUhorizontal: {
    width: "50vw",
    padding: "8px",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar disableGutters>
        <img
          src={RUhorizontal}
          className={classes.RUhorizontal}
          alt="RUhorizontal"
        />
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
