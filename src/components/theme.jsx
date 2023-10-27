import { createTheme } from "@mui/material";
import { deepOrange, indigo, red } from "@mui/material/colors";
export const theme = createTheme({
  palette: {
    primary: {
      main: indigo[700],
    },
    secondary: {
      main: deepOrange[500],
    },
    error: {
      main: "#d50000",
    },
    primaryText: {
      main: "#ffffff",
    },
    secondaryText: {
      main: "#000000",
    },
  },
});
