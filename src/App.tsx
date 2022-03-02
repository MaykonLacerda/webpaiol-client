import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { ptBR } from "@material-ui/core/locale";
import { LocalizationProvider } from "@mui/lab";

import "./assets/styles/global.scss";

import { AppRoutes } from "./routes";

function App() {
  const theme = createMuiTheme(
    {
      palette: {
        primary: { main: "#ED254E" },
      },
    },
    ptBR
  );

  return (
    <div className="container">
      <LocalizationProvider dateAdapter={DateAdapter}>
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </LocalizationProvider>
    </div>
  );
}

export default App;
