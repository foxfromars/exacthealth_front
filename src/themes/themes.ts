import { createTheme } from "@mui/material";
import { blue, purple, grey, red, green } from "@mui/material/colors";

let theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
      light: blue[100],
      dark: blue[900],
    },
    secondary: {
      main: purple[400],
      light: purple[100],
      dark: purple[900],
    },
    error: {
      main: red[900],
    },
    success: {
      main: green[400],
    },
    surface: grey[200],
    bg: grey[100],
  },
})

theme = createTheme(theme, {
  typography: {
    sectionTitle: {
      fontSize: "2.5rem",
      fontWeight: "500",
      width: "100%",
      height: "100px",
      display: "flex",
      alignItems: "center",
      marginLeft: "40px",
      marginTop: "10px",
      color: "black",
    },
  },
});

export default theme;

