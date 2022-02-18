import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

export default function NavTabs() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

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
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Tab1"
            icon={<RestoreIcon />}
            component={Link}
            to="/tab1"
            value="tab1"
          />
          <BottomNavigationAction
            label="Tab2"
            icon={<RestoreIcon />}
            component={Link}
            to="/tab2"
            value="tab2"
          />
          <BottomNavigationAction
            label="Tab3"
            icon={<RestoreIcon />}
            component={Link}
            to="/tab3"
            value="tab3"
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
