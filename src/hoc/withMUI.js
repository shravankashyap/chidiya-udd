import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
// import { secondary1, primary1, orange } from "../styles/color";
import { blue, orange, red } from "@material-ui/core/colors";
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red,
    warning: orange
  }
});

function withMUI(Component) {
  function WithMUI(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithMUI;
}

export default withMUI;
