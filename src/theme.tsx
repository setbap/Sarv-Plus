import red from "@material-ui/core/colors/red";
import {createMuiTheme} from "@material-ui/core/styles";
import {faIR} from "@material-ui/core/locale";

// A custom theme for this app
const theme = createMuiTheme(
    {
        direction: "rtl",
        palette: {
            primary: {
                main: "#AEE239",
                contrastText: "#fff"
            },
            secondary: {
                main: "#00A8C6",
            },
            error: {
                main: red.A400,
            },
            background: {
                default: "#F9F2E7",
            },
        },
    },
    faIR,
);

export default theme;
