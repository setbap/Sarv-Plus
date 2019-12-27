import red from "@material-ui/core/colors/red";
import { createMuiTheme } from "@material-ui/core/styles";
import { faIR } from "@material-ui/core/locale";

// A custom theme for this app
const theme = createMuiTheme(
	{
		direction: "rtl",

		palette: {
			primary: {
				main: "#556cd6",
			},
			secondary: {
				main: "#19857b",
			},
			error: {
				main: red.A400,
			},
			background: {
				default: "#fff",
			},
		},
	},
	faIR,
);

export default theme;
