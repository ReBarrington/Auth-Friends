import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from 'axios';

// possible actions to manipulate state - action types
export const GET_DATA = "GET_DATA";
export const UPDATING_DATA = "UPDATING_DATA";
export const NEW_FRIEND = "NEW_FRIEND";

// action creators - sends to reducer
export const getData = () => dispatch => {
    dispatch({ type: GET_DATA });
    axiosWithAuth()
    .get('/api/friends')
    .then(res => {
        console.log(res.data, ' is res.data in axios call')
        dispatch({ type: UPDATING_DATA, payload: res.data })
    })
    .catch(err => console.log('error fetching data from api. err: ', err));
};


export const updatingData = () => dispatch => {
    dispatch({ type: UPDATING_DATA });
    axiosWithAuth()
    .post('/api/friends')
    .then(res => {
        console.log(res, ' is response in axios post')
        dispatch({ type: UPDATING_DATA, payload: res.data })
    })
    .catch(err => {
        console.log('ERROR: ', err)
    })
}

export const newFriend = (name) => dispatch => {
    dispatch({ type: NEW_FRIEND, payload: name });
}