import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getInfo} from "../../../../actions/user_auth";


const Index = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInfo())
    }, []);


    return (
        <div>
            <h1>Info</h1>
        </div>
    )
};

export default Index