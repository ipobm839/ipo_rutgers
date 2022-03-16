import React from "react";
import { HomeNavbar, Footer } from "../components";
import HeaderImage from "../assets/header-img.jpg";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appCard: {
    display: "inline-block",
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    fontWeight: 600,
  },
  paperTitle: {
    flexGrow: 1,
    textAlign: "center",
    position: "absolute",
    width: "100%",
    top: "20vw",
    left: "0px",
    color: "white",
    fontSize: "4vw",
  },
  cardInfo: {
    textAlign: "center",
    boxShadow: "0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05)",
    transition:
      ".3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12)",
    margin: "10px",
    padding: "10px",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06)",
    },
  },
  cardActions: {
    justifyContent: "center",
  },
  headerImg: {
    width: "100%",
    height: "35vw",
  },
}));

export default function Tab1() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <HomeNavbar position="static" />
        <>
          <div className={classes.root}>
            <Grid container spacing={2} alignItems="stretch">
              <Grid item xs={12}>
                <Typography className={classes.paperTitle}>
                  Welcome to the IP&O App
                </Typography>
                <img
                  src={HeaderImage}
                  className={classes.headerImg}
                  alt="superHeroImage"
                />
              </Grid>
              <Grid item xs={12} sm={4} className={classes.appCard}>
                <Card className={classes.cardInfo}>
                  <CardActionArea>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        About IP&O
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        A division bringing together planning and
                        transportation, facilities operations and construction,
                        public safety and emergency management, and the majority
                        of the university's auxiliary enterprises.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4} className={classes.appCard}>
                <Card className={classes.cardInfo}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        IP&O News
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        A division bringing together planning and
                        transportation, facilities operations and construction,
                        public safety and emergency management, and the majority
                        of the university's auxiliary enterprises.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4} className={classes.appCard}>
                <Card className={classes.cardInfo}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Contact IP&O
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        A division bringing together planning and
                        transportation, facilities operations and construction,
                        public safety and emergency management, and the majority
                        of the university's auxiliary enterprises.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </div>
        </>
      </div>
      <Footer />
    </div>
  );
}
