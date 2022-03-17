import React, { useState } from "react";
import { Navbar, NavTabs } from "../components";
import Pagination from "@material-ui/lab/Pagination";
import resourcesData from "../util/resourcesData";
import {
  Typography,
  makeStyles,
  Button,
  Card,
  CardContent,
  List,
  Dialog,
  DialogContent,
  ListItem,
  ListItemText,
  IconButton,
  Grid,
} from "@material-ui/core";
import Divider from "@mui/material/Divider";
import { Close } from "@material-ui/icons";

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
  cardImage: {
    height: "300px",
    textAlign: "center",
    boxShadow: "0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05)",
    transition:
      ".3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12)",
    margin: "20px",
    "&:hover": {
      transform: "scale(1.03)",
      boxShadow: "0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06)",
    },
  },
  thumbnail: {
    height: "80px",
    width: "100%",
    backgroundColor: "#F0F0F0",
    color: "#007fac",
    padding: "20px",
    fontWeight: 500,
  },
  appCard: {
    display: "inline-block",
    marginTop: "20px",
  },
  learnMoreBtn: {
    backgroundColor: "#cc0033",
    color: "white",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "#007fac",
    },
  },
  dialogThumbnail: {
    height: "80vh",
    width: "80vw",
  },
  closeBtn: {
    float: "right",
  },
  pagination: {
    margin: "10px",
  },
}));

export default function Tab3() {
  const classes = useStyles();
  const itemsPerPage = 9;
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [app, setApp] = useState(null);

  const handleClickOpen = (event, item) => {
    setOpen(true);
    setApp(item);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={classes.root}>
        <Navbar />
        <>
          <div className={classes.pageTitle}>Resources</div>
          <Divider />
          <Grid>
            <Grid container spacing={2} alignItems="stretch">
              {resourcesData &&
                resourcesData
                  .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                  .map((i, index) => {
                    return (
                      <Grid
                        item
                        xs={12}
                        sm={4}
                        key={index}
                        className={classes.appCard}
                      >
                        <Card className={classes.cardImage}>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            className={classes.thumbnail}
                          >
                            {i.title}
                          </Typography>
                          <CardContent>
                            <List>
                              <ListItem key={i.desc}>
                                <ListItemText primary={i.desc} />
                              </ListItem>
                            </List>
                          </CardContent>
                          <Button
                            size="small"
                            onClick={(event) => handleClickOpen(event, i)}
                            className={classes.learnMoreBtn}
                          >
                            Learn More
                          </Button>
                        </Card>
                      </Grid>
                    );
                  })}
            </Grid>
          </Grid>
          <div>
            <Pagination
              count={Math.ceil(resourcesData.length / itemsPerPage)}
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

      {open && app && (
        <Dialog
          key={app.key}
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <div>
            {handleClose ? (
              <IconButton
                className={classes.closeBtn}
                aria-label="close"
                onClick={handleClose}
              >
                <Close />
              </IconButton>
            ) : null}

            <Typography className={classes.dialogTitle} variant="h6">
              {app.title}
            </Typography>
          </div>
          <DialogContent dividers>
            <iframe
              title={app.title}
              key={app.key}
              src={app.url}
              className={classes.dialogThumbnail}
            />
          </DialogContent>
        </Dialog>
      )}

      <NavTabs />
    </div>
  );
}
