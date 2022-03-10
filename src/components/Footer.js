import * as React from "react";
import { Typography, Link, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    flexGrow: 1,
    backgroundColor: "black",
    color: "white",
    height: "10em",
    padding: "10px",
  },
  footerText: {
    fontSize: "12px",
    textAlign: "center",
  },
}));

function Copyright(props) {
  const classes = useStyles();
  return (
    <Typography className={classes.footerText} {...props}>
      {"Copyright © "}
      {new Date().getFullYear()}
      {"."}
      <Link color="inherit" href="https://ipo.rutgers.edu/">
        Rutgers, The State University of New Jersey. All rights reserved.
      </Link>{" "}
    </Typography>
  );
}

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </div>
  );
}
