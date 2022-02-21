import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import {
  makeStyles,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  indicator: {
    color: 'red',
  },
}));

export default function NavTabs() {

  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const classes = useStyles();

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          classes={{
            indicator: classes.indicator
          }}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Tools"
            icon={<ManageAccountsIcon />}
            component={Link}
            to="/tab1"
            value="tab1"
          />
          <BottomNavigationAction
            label="Favorites"
            icon={<FavoriteIcon />}
            component={Link}
            to="/tab2"
            value="tab2"
          />
          <BottomNavigationAction
            label="Resources"
            icon={<BookmarksIcon />}
            component={Link}
            to="/tab3"
            value="tab3"
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
