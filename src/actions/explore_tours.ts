import {ThunkDispatch} from "redux-thunk"
import axios from 'axios'
import {
    GET_LASTEST_TOUR,
    LOADING_GET_LASTEST_TOUR,
    CLEAR_LOADING_GET_LASTEST_TOUR,
    CLEAR_LOADING_GET_LASTEST_ORGS,
    LOADING_GET_LASTEST_ORGS,
    GET_LASTEST_ORGS
} from "./action_types"
import {Blastest_tours, Bbest_orgs, Bfull_search} from "../util/urls"


export const get_lastest_tours = () => (dispatch: ThunkDispatch<{}, undefined, any>) => {
    dispatch({
        type: LOADING_GET_LASTEST_TOUR
    });
    axios.post(Blastest_tours, {isTwelve: false,}).then(res => {
        dispatch({
            type: CLEAR_LOADING_GET_LASTEST_TOUR,
        });
        dispatch({
            type: GET_LASTEST_TOUR,
            payload: res.data
        })
    }).catch(err => {
        console.log(err);
        dispatch({
            type: CLEAR_LOADING_GET_LASTEST_TOUR,
        })

    })
};
export const get_lastest_tours_with_page = (page: number) => (dispatch: ThunkDispatch<{}, undefined, any>) => {
    dispatch({
        type: LOADING_GET_LASTEST_TOUR
    });
    axios.post(Blastest_tours, {
        isTwelve: true,
        pageNumber: page
    }).then(res => {
        dispatch({
            type: CLEAR_LOADING_GET_LASTEST_TOUR,
        });
        dispatch({
            type: GET_LASTEST_TOUR,
            payload: res.data
        })
    }).catch(err => {
        console.log(err);
        dispatch({
            type: CLEAR_LOADING_GET_LASTEST_TOUR,
        })

    })
};


export const full_search_in_tours = (data: any) => (dispatch: ThunkDispatch<{}, undefined, any>) => {
    dispatch({
        type: LOADING_GET_LASTEST_TOUR
    });
    axios.post(Bfull_search, {
        isTwelve: true,
        pageNumber: +data.page ? +data.page : 1,
        ...data
    }).then(res => {
        dispatch({
            type: CLEAR_LOADING_GET_LASTEST_TOUR,
        });
        dispatch({
            type: GET_LASTEST_TOUR,
            payload: res.data
        })
    }).catch(err => {
        console.log(err);
        dispatch({
            type: CLEAR_LOADING_GET_LASTEST_TOUR,
        })

    })
};

export const get_lastest_orgs_with_page = (page: number) => (dispatch: ThunkDispatch<{}, undefined, any>) => {
    dispatch({
        type: LOADING_GET_LASTEST_ORGS
    });
    axios.post(Bbest_orgs, {
        isTwelve: true,
        pageNumber: page
    }).then(res => {
        dispatch({
            type: CLEAR_LOADING_GET_LASTEST_ORGS,
        });
        dispatch({
            type: GET_LASTEST_ORGS,
            payload: res.data
        })
    }).catch(_ => {

        dispatch({
            type: CLEAR_LOADING_GET_LASTEST_ORGS,
        })

    })
};