import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import { useDispatch } from "react-redux";
import FormLabel from "@material-ui/core/FormLabel";
import { Link as RLink } from "react-router-dom";
// import { signup as SGN } from "../../../actions/user_auth";
import { UserGender } from "../../../../actions/action_interfaces";
import {
	Flogin_user,
	Fvalidate_user,
	Freset_password_user,
	Fsignup,
} from "../../../../util/page_urls";

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="#">
				JiJo
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	itemPadding: {
		paddingTop: theme.spacing(1),
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const SignUp = () => {
	const dispatch = useDispatch();
	const [state, setState] = useState({
		email: "",
		newPassword: "",
		token: "",
	});

	const changeHanlder = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	const classes = useStyles();

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					رمز عبور جدید
				</Typography>
				<form
					className={classes.form}
					onSubmit={(e) => {
						e.preventDefault();
						// dispatch(
						// 	SGN({
						// 		name: "sina",
						// 		lastname: "ebr",
						// 		dob: "asdsd",
						// 		email: "eb@as.com",
						// 		gender: UserGender.MAN,
						// 		password: "ad",
						// 		phoneNumber: 12312313,
						// 	}),
						// );
						console.log(state);
					}}
				>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								type="email"
								fullWidth
								onChange={changeHanlder}
								value={state.email}
								id="email"
								label="آدرس ایمیل"
								name="email"
								autoComplete="email"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								onChange={changeHanlder}
								value={state.newPassword}
								name="token"
								label="کد تایید"
								type="password"
								id="password"
								autoComplete="current-password"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								onChange={changeHanlder}
								value={state.newPassword}
								name="newPassword"
								label=" رمز عبور جدید"
								type="password"
								id="password"
								autoComplete="current-password"
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						ایجاد حساب
					</Button>
					<Grid container>
						<Grid xs={12} item>
							<Link
								component={RLink}
								to={Flogin_user}
								variant="body2"
							>
								ورود به حساب کاربری
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={5}>
				<Copyright />
			</Box>
		</Container>
	);
};

export default SignUp;
