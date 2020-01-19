import React, {useEffect, useState} from "react";
import "react-toastify/dist/ReactToastify.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {
    Flogin_user,
    Fsignup,
    Findex,
    Finfo_user,
    Ftours,
    Forgs,
    FsearchIndex,
    FmapSearchIndex
} from "../../util/page_urls";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {useLoggend} from '../../util/isLogged';
import {useCookies} from "react-cookie";
import jwtDecode from "jwt-decode";
import {setTokenToHeader} from "../../util/axios_config";

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
    const {header} = useSelector((st: any) => st.page);
    const classes = useStyles();
    const history = useHistory();
    const [cookies, , remove] = useCookies(["jwtToken"]);
    const logout = () => {
        remove("jwtToken");
        setName("");
        setTokenToHeader("");

    };
    const isLogged = useLoggend();

    const [name, setName] = useState("");
    useEffect(() => {
        if (isLogged) {
            const user: any = jwtDecode(cookies.jwtToken);
            setName(user.name);
        } else {
            setName("")
        }
    }, [isLogged, cookies.jwtToken]);


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

        setState({...state, [side]: open});
    };

    const sideList = (side: DrawerSide) => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                <ListItem button onClick={() => history.push(Findex)}>
                    <ListItemIcon>
                        <InboxIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"صفحه اصلی"}/>
                </ListItem>
                <ListItem button onClick={() => history.push(Ftours)}>
                    <ListItemIcon>
                        <InboxIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"تور ها"}/>
                </ListItem>
                <ListItem button onClick={() => history.push(Forgs)}>
                    <ListItemIcon>
                        <InboxIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"سازمان ها"}/>
                </ListItem>
                <ListItem button onClick={() => history.push(FsearchIndex)}>
                    <ListItemIcon>
                        <InboxIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"جست و جو"}/>
                </ListItem>
                <ListItem button onClick={() => history.push(FmapSearchIndex)}>
                    <ListItemIcon>
                        <InboxIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"جست و جو با نقشه"}/>
                </ListItem>
                {
                    isLogged &&
                    <ListItem button onClick={() => history.push(Finfo_user)}>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"اطلاعات شخصی"}/>
                    </ListItem>
                }
            </List>
            <Divider/>
            <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                        </ListItemIcon>
                        <ListItemText primary={text}/>
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
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Button
                            color="inherit"
                            variant="outlined"
                            onClick={() => history.push(Findex)}
                        >
                            {header}
                        </Button>
                    </Typography>

                    {
                        isLogged ?
                            (<>
                                <Button
                                    onClick={() => {
                                        history.push(Finfo_user);
                                    }}
                                    variant="outlined"
                                    color="inherit"
                                    className={classes.menuButton}
                                >
                                    سلام {` ${name}  `}
                                </Button>
                                <Button
                                    onClick={() => {
                                        logout();
                                        history.push(Flogin_user);
                                    }}
                                    variant="outlined"
                                    color="inherit"
                                    className={classes.menuButton}
                                >
                                    خروج
                                </Button>


                            </>)
                            :
                            (<>
                                <Button
                                    onClick={() => history.push(Flogin_user)}
                                    variant="outlined"
                                    color="inherit"
                                    className={classes.menuButton}
                                >
                                    ورود
                                </Button>
                                <Button
                                    onClick={() => history.push(Fsignup)}
                                    variant="outlined"
                                    color="inherit"
                                >
                                    ایجاد حساب
                                </Button>
                            </>)
                    }
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
