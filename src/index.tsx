import React from "react";
import { render } from "react-dom";
import "./index.css";
import "@fontsource/roboto";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { EuiProvider } from "@elastic/eui";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <EuiProvider
          colorMode="light"
          modify={{
            colors: {
              LIGHT: {
                primary: theme.color.euiPrimary,
                warning: theme.color.euiWarning,
                body: theme.color.euiBody,
                accent: theme.color.euiAccent,
              },
            },
          }}
        >
          <App />
        </EuiProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
