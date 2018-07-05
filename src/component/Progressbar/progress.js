import React from "react";
// import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import LinearProgress from "@material-ui/core/LinearProgress";
import classes from "./progress.module.css";
// const theme = createMuiTheme({
//   palette: {
//     primary: { main: "#2098D1" }, // Purple and green play nicely together.
//     secondary: { main: "#2098D1" } // This is just green.A700 as hex.
//   }
// });

const progressbar = props => {
  const boldfont = { fontWeight: "bold" };
  return (
    // <MuiThemeProvider theme={theme}>
    <div className={classes.Progressbar}>
      <p style={boldfont}>{props.title}</p>
      {/* <LinearProgress
          className={classes.Linearbar}
          variant="determinate"
          color="primary"
          value={props.value}
        /> */}
    </div>
    // </MuiThemeProvider>
  );
};

export default progressbar;
