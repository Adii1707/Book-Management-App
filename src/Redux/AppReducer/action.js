import * as types from "./actionType";
import axios from "axios";

const getBookRequest = ()=>{
    return {
        type: types.GET_BOOKS_REQUEST
    }
}


const getBookSuccess = (payload)=>{
    return {
        type: types.GET_BOOKS_SUCCESS,
        payload
    }
}


const getBookFailure = ()=>{
    return {
        type: types.GET_BOOKS_FAILURE
    }
}

const getBooks = (params) => (dispatch) => {
    dispatch(getBookRequest());

    return axios.get("http://localhost:8080/books", params).then((r)=>{
     return dispatch(getBookSuccess(r.data))
})
    .catch((e)=>(
        dispatch(getBookFailure())
    ))
}




export {getBookRequest, getBooks, getBookSuccess, getBookFailure}