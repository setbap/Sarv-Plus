import red from "@material-ui/core/colors/red";
import { createMuiTheme } from "@material-ui/core/styles";
import { faIR } from "@material-ui/core/locale";
import "vazir-font/dist/font-face.css";
// A custom theme for this app
const theme = createMuiTheme(
	{
		direction: "rtl",
		palette: {
			primary: {
				main: "#56a714",
				contrastText: "#fff",
			},
			secondary: {
				main: "#ffffab",
			},
			error: {
				main: red.A400,
			},
			background: {
				default: "#F9F2E7",
			},
		},
		typography: {
			fontFamily: [
				"vazir",
				"Roboto",
				"-apple-system",
				"BlinkMacSystemFont",
				'"Segoe UI"',
				'"Helvetica Neue"',
				"Arial",
				"sans-serif",
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
			].join(","),
		},
	},
	faIR,
);

export default theme;
