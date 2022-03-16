import * as React from "react";
import { Typography, Link, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    flexGrow: 1,
    backgroundColor: "black",
    color: "#AFAFAF",
    padding: "20px",
  },
  footerText: {
    fontSize: "10px",
    textAlign: "center",
    margin: "0 auto",
  },
  footerTextSecondary: {
    fontSize: "10px",
    textAlign: "center",
    margin: "0 auto",
    padding: "10px",
  },
}));

function Copyright(props) {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.footerText} {...props}>
        {"Copyright © "}
        {new Date().getFullYear()}
        {". "}
        <Link color="inherit" href="https://ipo.rutgers.edu/" target="_blank">
          Rutgers, The State University of New Jersey. All rights reserved.
        </Link>
      </Typography>
      <Typography className={classes.footerTextSecondary}>
        Rutgers is an equal access/equal opportunity institution. Individuals
        with disabilities are encouraged to direct suggestions, comments, or
        complaints concerning any accessibility issues with Rutgers websites to
        accessibility@rutgers.edu or complete the{" "}
        <Link
          color="inherit"
          href="https://rutgers.ca1.qualtrics.com/jfe/form/SV_57iH6Rfeocz51z0"
          target="_blank"
        >
          Report Accessibility Barrier / Provide Feedback form.
        </Link>
      </Typography>
    </div>
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
