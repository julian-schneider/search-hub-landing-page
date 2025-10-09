import React from "react";
import { render } from "react-dom";
import "./index.css";
import "@fontsource/roboto";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { EuiProvider } from "@elastic/eui";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

declare global {
  interface Window {
    REACT_APP_LANDING_URL?: string;
    REACT_APP_DATASETS_URL?: string;
    REACT_APP_REPOSITORIES_URL?: string;
  }
}

const queryClient = new QueryClient();

render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
