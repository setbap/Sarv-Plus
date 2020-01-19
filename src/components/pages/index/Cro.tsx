import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import one from "./image/one.jpg";
import two from "./image/two.jpg";
import three from "./image/three.jpg";
// import four from "./image/four.jpg";

// @ts-ignore
import Carousel from "re-carousel";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    croPage: {
        zIndex: 1200,
        height: "50vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "transparent",
        flexDirection: "column-reverse",
        display: "flex",
        justifyContent: "center"

        // backgroundBlendMode: "color-dodge",
    },
    croText: {
        width: "max-content",
        height: "100px",
        alignSelf: "center",

        margin: theme.spacing(2),
        padding: theme.spacing(2),
        borderRadius: `${theme.spacing(2)}px`,
        zIndex: 1601,
        color: theme.palette.text.secondary,
        backgroundColor: "rgba(66,66,66,0.4)",
        bottom: "0",
    },
}));

export const Cro = () => {
    const classes = useStyles();
    const items = [
        {
            name: "بهترین تور دنیا",
            img: one,
        },
        {
            name: "ما خیلی خوبیم ",
            img: two,
        },
        {
            name: "پولتان نزد ما امانت",
            img: three,
        },
    ];

    return (
        <div style={{height: "50vh"}}>
            <CssBaseline/>
            <Carousel loop auto>
                {items.map((i) => (
                    <div
                        key={i.name}
                        style={{backgroundImage: `url(${i.img})`}}
                        className={classes.croPage}
                    >
                        <div className={classes.croText}>
                            <Typography variant="h2" component="div">
                                <Box textAlign="center">{i.name}</Box>
                            </Typography>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};
