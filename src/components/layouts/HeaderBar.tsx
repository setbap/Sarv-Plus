import React from "react";
import "react-toastify/dist/ReactToastify.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Flogin_user, Fsignup, Findex } from "../../util/page_urls";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
			marginLeft: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
		},
		list: {
			width: 250,
		},
		fullList: {
			width: "auto",
		},
	}),
);

const HeaderBar: React.FC = () => {
	const classes = useStyles();
	const history = useHistory();

	const [state, setState] = React.useState({
		left: false,
	});

	type DrawerSide = "left";
	const toggleDrawer = (side: DrawerSide, open: boolean) => (
		event: React.KeyboardEvent | React.MouseEvent,
	) => {
		if (
			event &&
			event.type === "keydown" &&
			((event as React.KeyboardEvent).key === "Tab" ||
				(event as React.KeyboardEvent).key === "Shift")
		) {
			return;
		}

		setState({ ...state, [side]: open });
	};

	const sideList = (side: DrawerSide) => (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer(side, false)}
			onKeyDown={toggleDrawer(side, false)}
		>
			<List>
				{["Inbox", "Starred", "Send email", "Drafts"].map(
					(text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					),
				)}
			</List>
			<Divider />
			<List>
				{["All mail", "Trash", "Spam"].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	);

	return (
		<>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
						onClick={toggleDrawer("left", true)}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						<Button
							color="inherit"
							variant="outlined"
							onClick={() => history.push(Findex)}
						>
							مین
						</Button>
					</Typography>

					<Button
						onClick={() => history.push(Fsignup)}
						variant="outlined"
						color="inherit"
						className={classes.menuButton}
					>
						ورود
					</Button>
					<Button
						onClick={() => history.push(Flogin_user)}
						variant="outlined"
						color="inherit"
					>
						ایجاد حساب
					</Button>
				</Toolbar>
			</AppBar>
			<SwipeableDrawer
				anchor="left"
				open={state.left}
				onClose={toggleDrawer("left", false)}
				onOpen={toggleDrawer("left", true)}
			>
				{sideList("left")}
			</SwipeableDrawer>
		</>
	);
};

export default HeaderBar;
