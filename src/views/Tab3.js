import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navbar, NavTabs } from "../components";

const theme = createTheme();

export default function Tab3() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        Tab3
      </Container>
      <NavTabs />
    </ThemeProvider>
  );
}
