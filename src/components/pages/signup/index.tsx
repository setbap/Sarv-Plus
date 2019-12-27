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
// import { signup as SGN } from "../../../actions/user_auth";
import { UserGender } from "../../../actions/action_interfaces";

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
		name: "",
		lastname: "",
		dob: new Date(),
		email: "",
		gender: UserGender.MAN,
		password: "",
		phoneNumber: "",
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
					ایجاد حساب
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
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete="name"
								name="name"
								variant="outlined"
								required
								fullWidth
								id="firstName"
								onChange={changeHanlder}
								value={state.name}
								label="نام"
								autoFocus
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="lastName"
								label="نام خانوادگی"
								onChange={changeHanlder}
								value={state.lastname}
								name="lastname"
								autoComplete="lname"
							/>
						</Grid>
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
								value={state.password}
								name="password"
								label="رمز عبور"
								type="password"
								id="password"
								autoComplete="current-password"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								autoComplete="phonenumber"
								name="phoneNumber"
								variant="outlined"
								// required
								type={"number"}
								fullWidth
								id="phoneNumber"
								onChange={changeHanlder}
								value={state.phoneNumber}
								label="شماره تلفن"
							/>
						</Grid>
						<Grid item xs={12}>
							<FormLabel component="legend">جنسیت:</FormLabel>
							<RadioGroup
								aria-label="جنسیت"
								name="gender"
								value={state.gender}
								onChange={changeHanlder}
							>
								<Grid container>
									<Grid item xs={6}>
										<FormControlLabel
											value={UserGender.WOMAN}
											control={<Radio />}
											label="زن"
										/>
									</Grid>
									<Grid item xs={6}>
										<FormControlLabel
											value={UserGender.MAN}
											control={<Radio />}
											label="مرد"
										/>
									</Grid>
								</Grid>
							</RadioGroup>
							<Grid item xs={12}>
								<TextField
									id="date"
									label="تاریخ تولد"
									name="dob"
									onChange={changeHanlder}
									value={state.dob}
									type="date"
									required
									fullWidth
									InputLabelProps={{
										shrink: true,
									}}
								/>
							</Grid>
						</Grid>

						<Grid item xs={12}>
							<FormControlLabel
								control={
									<Checkbox
										value="allowExtraEmails"
										color="primary"
									/>
								}
								label="تمام قوانین نا نوشته سایت را قبول دارم."
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
							<Link href="#" variant="body2">
								حساب کاربری دارید ؟ صفحه ورود
							</Link>
						</Grid>
						<Grid item xs={12} className={classes.itemPadding}>
							<Link href="#" variant="body2">
								صفحه تایید ایمیل
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
