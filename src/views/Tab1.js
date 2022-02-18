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
  ListItem,
  ListItemText,
} from "@material-ui/core";

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
  appImage: {
    width: "100%",
  },
  cardImage: {
    maxWidth: 500,
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
  card: {
    display: "inline-block",
    margin: "20px",
  },
  thumbnail: {
    height: "350px",
    width: "100%",
  },
  appCard: {
    display: "inline-block",
    marginTop: "20px",
  },
  learnMoreBtn: {
    color: "#78935d",
    fontWeight: 500,
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

  const filterNames = ({ common_name }) => {
    return (
      common_name &&
      common_name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
    );
  };


  console.log(myPathRutgersData)
  return (
    <div>
      <div className={classes.root}>
      <Navbar />
        <SearchBar onSearch={setSearchValue} value={searchValue} />
          <>
            {myPathRutgersData &&
              myPathRutgersData
                // .filter(filterNames)
                .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                .map((i,index) => {
                  return (
                    <span
                      key={index}
                      className={classes.appCard}
                    >
                      <Card className={classes.cardImage}>
                        <CardActionArea>
                          <img
                            alt="appImage"
                            key={index}
                            src={
                              myPathRutgersData[i.title]
                                ? myPathRutgersData[i.title].image
                                : "https://i.imgur.com/VRaN8uw.jpg"
                            }
                            className={classes.thumbnail}
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              {i.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                            >
                              <List>
                                <ListItem key={i.desc}>
                                  <ListItemText
                                    primary="Description"
                                    secondary={i.desc}
                                  />
                                </ListItem>
                              </List>
                              <CardActions>
                                {/* <Button
                                  size="small"
                                  onClick={(event) =>
                                    handleClickOpen(event, i)
                                  }
                                  className={classes.learnMoreBtn}
                                >
                                  Learn More
                                </Button> */}
                              </CardActions>
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </span>
                  );
                })}
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
      <NavTabs />
    </div>
  );
}
