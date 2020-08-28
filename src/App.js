import React, { Suspense } from "react";
import "./App.css";
import { FirebaseAppProvider } from "reactfire";
import UserPage from "./User/UserPage";
import {
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
  createMuiTheme,
} from "@material-ui/core";
import Main from "./Main/index.js";
import { Switch, BrowserRouter, Route } from "react-router-dom";

const firebaseConfig = {};

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/MyPage">
              <Wrapper fallback={<div>Loading</div>}>
                <UserPage />
              </Wrapper>
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </FirebaseAppProvider>
  );
}

function Wrapper(props: any) {
  return <Suspense fallback={props.fallback}>{props.children}</Suspense>;
}

export default App;
