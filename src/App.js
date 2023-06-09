import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Accounts } from "./components/Accounts";
import { Documents } from "./components/Documents";

import "./App.css";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
}));

function App() {
  return (
    <>
      <AppBar position="static" sx={{ marginBottom: "12px" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ScotiaBank
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={2} disableEqualOverflow>
          <Grid xs={12}>
            <Item>
              <Accounts />
            </Item>
          </Grid>
          <Grid xs={12}>
            <Item>
              <Documents />
            </Item>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
