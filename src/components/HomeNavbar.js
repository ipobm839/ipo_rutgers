import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import RUhorizontal from "../assets/ipo_horizontal.png";
import React from "react";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#cc0033 !important",
    color: "white",
  },
  RUhorizontal: {
    maxWidth: "35vw",
    padding: "10px",
  },
  loginBtn: {
    float: "right",
  },
}));

export default function HomeNavbar() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={classes.appBar}>
        <Toolbar disableGutters>
          <img
            src={RUhorizontal}
            className={classes.RUhorizontal}
            alt="RUhorizontal"
          />
          <Button
            // onClick={() => setIsOpen(!isOpen)}
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className={classes.loginBtn}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
