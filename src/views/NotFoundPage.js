/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  notFoundPage: {
    margin: "0 auto",
  },
  notFoundImg: {
    width: "30vw",
  },
}));

export default function NotFoundPaAge() {
  const classes = useStyles();

  return (
    <div className={classes.notFoundPage} id="wrapper">
      <img
        className={classes.notFoundImg}
        src="https://i.imgur.com/qIufhof.png"
      />
      <div id="info">
        <h3>This page could not be found</h3>
      </div>
    </div>
  );
}
