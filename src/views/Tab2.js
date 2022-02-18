import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavTabs } from "../components";

const theme = createTheme();

export default function Tab2() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        Tab2
      </Container>
      <NavTabs />
    </ThemeProvider>
  );
}
