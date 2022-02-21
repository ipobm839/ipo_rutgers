import React, { useState } from "react";
import { Navbar, NavTabs, SearchBar } from "../components";
import Pagination from "@material-ui/lab/Pagination";
import myPathRutgersData from "../util/myPathRutgersData";
import {
  Typography,
  makeStyles,
  Button,
  CardActions,
  Card,
  CardContent,
  CardActionArea,
  List,
  Dialog,
  DialogContent,
  ListItem,
  ListItemText,
  IconButton,
  Grid,
} from "@material-ui/core";

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
  cardImage: {
    // width: "300px",
    textAlign: "center",
    boxShadow: "0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05)",
    transition:
      ".3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12)",
    margin: "10px",
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
  pagination: {
    margin: "10px",
  },
}));

export default function Tab1() {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("");
  const itemsPerPage = 9;
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [app, setApp] = useState(null);

  // const filterNames = ({ common_name }) => {
  //   return (
  //     common_name &&
  //     common_name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
  //   );
  // };

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
        <SearchBar onSearch={setSearchValue} value={searchValue} />
        <>
          <Grid>
            {myPathRutgersData &&
              myPathRutgersData
                // .filter(filterNames)
                .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                .map((i, index) => {
                  return (
                    <Grid item xs={12} sm={4} key={index} className={classes.appCard}>
                      <Card className={classes.cardImage}>
                        <CardActionArea>
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
                            <CardActions>
                              <>
                                <Button
                                  size="small"
                                  onClick={(event) => handleClickOpen(event, i)}
                                  className={classes.learnMoreBtn}
                                >
                                  Learn More
                                </Button>
                              </>
                            </CardActions>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  );
                })}
          </Grid>
          <div>
            <Pagination
              count={Math.ceil(myPathRutgersData.length / itemsPerPage)}
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
            <Typography className={classes.dialogTitle} variant="h6">
              {app.title}
            </Typography>
            {handleClose ? (
              <IconButton
                className={classes.closeBtn}
                aria-label="close"
                onClick={handleClose}
              >
                <Close />
              </IconButton>
            ) : null}
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
