import * as React from "react";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {DatePicker, KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import Input from "@material-ui/core/Input";
import SearchIcon from '@material-ui/icons/Search';
import {ChangeEvent, useState} from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from '@date-io/dayjs';
import {useHistory} from "react-router-dom";
import DayJs from "dayjs";
import {Divider} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {FsearchResault} from "../../../util/page_urls";


const useStyle = makeStyles((theme) => ({
    headText: {
        margin: theme.spacing(2)
    },
    searchForm: {
        border: "2px solid gray",
        padding: theme.spacing(4),
        borderRadius: theme.shape.borderRadius,
    },
    button: {
        alignSelf: "center",
        margin: theme.spacing(2),
        paddingInline: theme.spacing(2),

    },
    searchItem: {
        marginBottom: `${theme.spacing(4)}px !important `
    },
    iconPadding: {
        marginLeft: theme.spacing(1)
    }

}))

const Search = (props: any) => {
    const classes = useStyle();
    const history = useHistory();
    const [state, setState] = useState({
        name: "",
        remainingCapacity: "",
        highStartDate: "",
        lowStartDate: "",
        highFinishDate: "",
        lowFinishDate: "",
        highPrice: "",
        lowPrice: "",
        sourcePlace: "",
        destinationPlace: "",
    });

    const searchTour = () => {
        console.log(state);
        // const urlParam = new URLSearchParams();
        const urlParam = Object.keys(state).map((key) => {
            // @ts-ignore
            if (state[key]) return [key, state[key].toString()].map(encodeURIComponent).join("=");
        }).filter(data => data).join("&");
        history.push({
            pathname: FsearchResault,
            search: urlParam
        })
    }
    const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.persist();
        setState((val: any) => ({
            ...val,
            [e.target.name]: e.target.value
        }))

    };

    const changeTimeHandler = (name: string, m: any) => {
        // let now = dayjs();
        console.log(`${m.$y}-${m.$M}-${m.$D}`)
        console.log(m)
        setState((val: any) => ({
            ...val,
            [name]: `${m.$y}-${m.$M + 1}-${m.$D}`
        }))
    };

    return (
        <Container maxWidth={"md"}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Typography className={classes.headText} align={"center"} variant={"h4"}>
                    جست و جو در میان تور ها
                </Typography>

                <Box className={classes.searchForm}>


                    <TextField
                        name={"name"}
                        value={state.name}
                        className={classes.searchItem}
                        onChange={changeHandler}
                        label="نام تور "
                        style={{margin: 8}}
                        placeholder="مثلا دورهمی"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />

                    <TextField
                        name={"sourcePlace"}
                        value={state.sourcePlace}
                        className={classes.searchItem}
                        onChange={changeHandler}
                        label="مکان شروع"
                        style={{margin: 8}}
                        placeholder="مثلا گرگان"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        name={"destinationPlace"}
                        value={state.destinationPlace}
                        className={classes.searchItem}
                        onChange={changeHandler}
                        label="مکان برگزاری"
                        style={{margin: 8}}
                        placeholder="مثلا محمودآباد"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <Grid container className={classes.searchItem} spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box alignItems="center" justifyContent={"center"} display={'flex'} flexDirection="row">
                                <Typography>
                                    از قیمت
                                </Typography>


                                <Box>

                                    <TextField
                                        name={"lowPrice"}
                                        value={state.lowPrice}
                                        onChange={changeHandler}
                                        label="حداقل قیمت"
                                        style={{margin: 8}}
                                        placeholder="از قیمت"

                                        type={"number"}
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="outlined"
                                    />
                                </Box>
                                <Typography>
                                    هزار تومان
                                </Typography>
                            </Box>

                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box alignItems="center" justifyContent={"center"} display={'flex'} flexDirection="row">
                                <Typography>
                                    تا قیمت
                                </Typography>


                                <Box>

                                    <TextField
                                        name={"highPrice"}
                                        value={state.highPrice}
                                        onChange={changeHandler}
                                        label="حداکفر قیمت"
                                        style={{margin: 8}}
                                        placeholder="تا قیمت"

                                        type={"number"}
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="outlined"
                                    />
                                </Box>
                                <Typography>
                                    هزار تومان
                                </Typography>
                            </Box>

                        </Grid>


                    </Grid>

                    <Divider className={classes.searchItem}/>

                    <Grid className={classes.searchItem} container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box alignItems="center" justifyContent={"center"} display={'flex'} flexDirection="row">
                                <Box margin={1}>
                                    <Typography>
                                        محدوده تاریخ شروع
                                    </Typography>
                                </Box>
                                <Box>
                                    <DatePicker
                                        name={"lowStartDate"}
                                        value={state.lowStartDate}
                                        onChange={(date) => changeTimeHandler("lowStartDate", date)}
                                        label="از"
                                        inputVariant="outlined"
                                    />

                                </Box>

                            </Box>

                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box alignItems="center" justifyContent={"center"} display={'flex'} flexDirection="row">
                                <Box margin={1}>
                                    <Typography>
                                        تا تاریخ
                                    </Typography>
                                </Box>

                                <Box>
                                    <DatePicker
                                        name={"highStartDate"}
                                        value={state.highStartDate}
                                        onChange={(date) => changeTimeHandler("highStartDate", date)}
                                        label="تا"
                                        inputVariant="outlined"
                                    />

                                </Box>

                            </Box>

                        </Grid>


                    </Grid>

                    <Divider className={classes.searchItem}/>

                    <Grid className={classes.searchItem} container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box alignItems="center" justifyContent={"center"} display={'flex'} flexDirection="row">
                                <Box margin={1}>
                                    <Typography>
                                        محدوده تاریخ شروع
                                    </Typography>
                                </Box>
                                <Box>
                                    <DatePicker
                                        name={"lowFinishDate"}
                                        value={state.lowFinishDate}
                                        onChange={(date) => changeTimeHandler("lowFinishDate", date)}
                                        label="از"
                                        inputVariant="outlined"
                                    />

                                </Box>

                            </Box>

                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box alignItems="center" justifyContent={"center"} display={'flex'} flexDirection="row">
                                <Box margin={1}>
                                    <Typography>
                                        تا تاریخ
                                    </Typography>
                                </Box>

                                <Box>
                                    <DatePicker
                                        name={"highFinishDate"}
                                        value={state.highFinishDate}
                                        onChange={(date) => changeTimeHandler("highFinishDate", date)}
                                        label="تا"
                                        inputVariant="outlined"
                                    />

                                </Box>

                            </Box>

                        </Grid>


                    </Grid>

                    <Box component={"div"} display={"flex"} justifyContent={"flex-end"}>
                        <Button
                            onClick={searchTour}
                            variant="contained"
                            color="primary"
                            size="large"
                            className={classes.button}
                            startIcon={<SearchIcon className={classes.iconPadding}/>}
                        >
                            جست و جو
                        </Button>
                    </Box>
                </Box>
            </MuiPickersUtilsProvider>
        </Container>
    )
};


export default Search