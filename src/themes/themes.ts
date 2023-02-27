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
    surface: grey[50],
    bg: grey[100],
  }
})

theme = createTheme(theme, { });

export default theme;

