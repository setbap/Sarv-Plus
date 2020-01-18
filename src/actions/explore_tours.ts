import {ThunkDispatch} from "redux-thunk"
import axios from 'axios'
import {
    GET_LASTEST_TOUR,
    LOADING_GET_LASTEST_TOUR,
    CLEAR_LOADING_GET_LASTEST_TOUR,
    CLEAR_LOADING_GET_LASTEST_ORGS,
    LOADING_GET_LASTEST_ORGS,
    GET_LASTEST_ORGS,
    COMMENT_TOUR,
    ERR_COMMENT_TOUR,
    RATE_TOUR, ERR_RATE_TOUR, GET_TOUR
} from "./action_types"
import {
    Blastest_tours,
    Bbest_orgs,
    Bfull_search,
    Bdistant_search,
    Bcomment_tour,
    Brate_tour,
    Bsingle_tour
} from "../util/urls"
import {toast} from "react-toastify";


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


export const map_search_in_tours = (data: any) => (dispatch: ThunkDispatch<{}, undefined, any>) => {
    dispatch({
        type: LOADING_GET_LASTEST_TOUR
    });
    axios.post(Bdistant_search, {
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


export const get_single_tour = (id: string) => (dispatch: ThunkDispatch<{}, undefined, any>) => {
    dispatch({
        type: LOADING_GET_LASTEST_TOUR
    })
    axios.post(Bsingle_tour + id).then(res => {
        dispatch({
            type: CLEAR_LOADING_GET_LASTEST_TOUR,
        });
        dispatch({
            type: GET_TOUR,
            payload: res.data.tour
        })
    }).catch(err => {
        console.log(err);
        dispatch({
            type: CLEAR_LOADING_GET_LASTEST_TOUR,
        })

    })
};

export const post_tour_rate = (value: number | null, id: string) => (dispatch: ThunkDispatch<{}, undefined, any>) => {
    axios.post(Brate_tour, {tourId: id, rate: value}).then(res => {
        dispatch({
            type: RATE_TOUR,
        });
        toast.success("امتیاز شما ثبت شد.")
    }).catch(err => {
        console.log(err);
        dispatch({
            type: ERR_RATE_TOUR,
        });
        toast.error("اشکال در ثبت امتیاز.برای هر سازمان فقط یک باز میتوانید امتیاز ثبت کنید.", {autoClose: 4000})
    })
};

export const post_tour_comment = (text: string, id: string) => (dispatch: ThunkDispatch<{}, undefined, any>) => {

    axios.post(Bcomment_tour, {tourId: id, body: text}).then(res => {
        dispatch({
            type: COMMENT_TOUR,
        });
        toast.success("نظر شما ثبت شد. برای مشاهده صفحه را بارگذاری نمایید.")
    }).catch(err => {
        console.log(err);
        dispatch({
            type: ERR_COMMENT_TOUR,
        });
        toast.error("خطا در ارسال نظر", {autoClose: 4000})
    })
};