import { ThunkDispatch } from "redux-thunk"
import axios from 'axios';
import { toast } from "react-toastify";

import {
    LOADING_GET_LASTEST_ORGS,
    CLEAR_LOADING_GET_LASTEST_ORGS,
    GET_LASTEST_ORGS,
    GET_ORG, RATE_ORG, ERR_RATE_ORG, COMMENT_ORG, ERR_COMMENT_ORG
} from "./action_types"
import { Bbest_orgs, Bcomment_org, Brate_org, Bsingle_org } from "../util/urls";


export const get_lastest_orgs = () => (dispatch: ThunkDispatch<{}, undefined, any>) => {
    dispatch({
        type: LOADING_GET_LASTEST_ORGS
    })
    axios.post(Bbest_orgs).then(res => {
        dispatch({
            type: CLEAR_LOADING_GET_LASTEST_ORGS,
        })
        dispatch({
            type: GET_LASTEST_ORGS,
            payload: res.data
        });
    }).catch(err => {
        console.log(err);
        dispatch({
            type: CLEAR_LOADING_GET_LASTEST_ORGS,
        });

    })
};

export const get_single_org = (id: string) => (dispatch: ThunkDispatch<{}, undefined, any>) => {
    dispatch({
        type: LOADING_GET_LASTEST_ORGS
    })
    axios.post(Bsingle_org + id).then(res => {
        dispatch({
            type: CLEAR_LOADING_GET_LASTEST_ORGS,
        });
        dispatch({
            type: GET_ORG,
            payload: res.data.org
        })
    }).catch(err => {
        console.log(err);
        dispatch({
            type: CLEAR_LOADING_GET_LASTEST_ORGS,
        })

    })
};

export const post_org_rate = (value: number | null, id: string) => (dispatch: ThunkDispatch<{}, undefined, any>) => {

    axios.post(Brate_org, { orgId: id, rate: value }).then(res => {
        dispatch({
            type: RATE_ORG,
        });
        toast.success("اامتیاز شما ثبت شد.")
    }).catch(err => {
        console.log(err);
        dispatch({
            type: ERR_RATE_ORG,
        });
        toast.error("اشکال در ثبت امتیاز.برای هر سازمان فقط یک باز میتوانید امتیاز ثبت کنید.", { autoClose: 4000 })
    })
};

export const post_org_comment = (text: string, id: string) => (dispatch: ThunkDispatch<{}, undefined, any>) => {

    axios.post(Bcomment_org, { orgId: id, body: text }).then(res => {
        dispatch({
            type: COMMENT_ORG,
        });
        toast.success("نظر شما ثبت شد. برای مشاهده صفحه را بارگذاری نمایید.")
    }).catch(err => {
        console.log(err);
        dispatch({
            type: ERR_COMMENT_ORG,
        });
        toast.error("خطا در ارسال نظر", { autoClose: 4000 })
    })
};