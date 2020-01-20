import React, { ChangeEvent, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Title from "./Title";
import Grid from "@material-ui/core/Grid";
import { FormControl } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import { setNewInfo } from "../../../../actions/user_auth";

const useStyles = makeStyles((theme) => ({
	mp: {
		marginTop: theme.spacing(2),
	},
}));

export const PersonalInfo = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { user } = useSelector((state: any) => state.auth);
	const [state, setState] = useState({
		name: "",
		lastname: " ",
		email: " ",
		gender: "MAN",
	});

	useEffect(() => {
		setState(() => user);
	}, [user]);

	const changeHandler = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		e.persist();
		setState((val: any) => ({
			...val,
			[e.target.name]: e.target.value,
		}));
	};
	const selectChangeHandler = (
		name: string,
		e: React.ChangeEvent<{ value: unknown }>,
	) => {
		e.persist();
		setState((val: any) => ({
			...val,
			[name]: e.target.value,
		}));
	};

	const formSubmit = (event: any) => {
		event.preventDefault();
		dispatch(setNewInfo(state));
	};

	return (
		<React.Fragment>
			<Title>اطلاعات شخصی </Title>
			<form onSubmit={formSubmit}>
				<Grid spacing={2} container>
					<Grid item xs={12} md={6}>
						<TextField
							fullWidth
							margin="normal"
							label={"نام"}
							value={state.name || ""}
							className={classes.mp}
							onChange={changeHandler}
							variant={"outlined"}
							required
							name={"name"}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							fullWidth
							required
							label={"نام خانوادگی"}
							value={state.lastname || ""}
							className={classes.mp}
							onChange={changeHandler}
							variant={"outlined"}
							name={"lastname"}
						/>
					</Grid>

					<Grid item xs={12} md={6}>
						<FormControl
							variant="outlined"
							fullWidth
							className={classes.mp}
						>
							<Select
								native
								fullWidth
								name={"gender"}
								value={state.gender || "MAN"}
								onChange={(e) =>
									selectChangeHandler("gender", e)
								}
								inputProps={{
									name: "gender",
								}}
							>
								<option value={"MAN"}>مرد</option>
								<option value={"WOMAN"}>زن</option>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							disabled
							fullWidth
							label={"نام"}
							value={state.email || ""}
							className={classes.mp}
							variant={"outlined"}
							required
							name={"email"}
						/>
					</Grid>
					<Grid item xs={12}>
						<Button
							type={"submit"}
							variant={"outlined"}
							color="primary"
							style={{
								float: "left",
							}}
						>
							اصلاح اطلاعات
						</Button>
					</Grid>
				</Grid>
			</form>
		</React.Fragment>
	);
};
