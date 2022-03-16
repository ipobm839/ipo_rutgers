import React, { useState } from "react";
import { Navbar, NavTabs } from "../components";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles, Grid } from "@material-ui/core";
import Divider from "@mui/material/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#78935d",
    color: "white",
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    fontWeight: 600,
  },
  pageTitle: {
    fontSize: "20px",
    fontWeight: 500,
    margin: "20px",
  },
  pagination: {
    margin: "10px",
  },
}));

export default function Tab2() {
  const classes = useStyles();
  const [page, setPage] = useState(1);

  return (
    <div>
      <div className={classes.root}>
        <Navbar />
        <div className={classes.pageTitle}>Favorites</div>
        <Divider />
        <>
          <Grid>
            <Grid container spacing={2} alignItems="stretch"></Grid>
          </Grid>
          <div>
            <Pagination
              // count={Math.ceil(myPathRutgersData.length / itemsPerPage)}
              page={page}
              onChange={(e, value) => setPage(value)}
              defaultPage={1}
              size="medium"
              showFirstButton
              showLastButton
              className={classes.pagination}
            />
          </div>
        </>
      </div>
      <NavTabs />
    </div>
  );
}
