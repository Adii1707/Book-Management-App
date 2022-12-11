import React from 'react'
import * as types from "./actionType"
const initialstate = {
  isLoading: false,
  Books: [],
  isError: false
}



export const reducer = (oldState=initialstate, action) => {
 
    const {type, payload} = action;

    switch(type){
      case types.GET_BOOKS_REQUEST:
        return {
          isLoading: true,
        }
    
    case types.GET_BOOKS_SUCCESS:
        return {
          isLoading: false,
          Books: payload,
          isError: false
        }
        case types.GET_BOOKS_FAILURE:
          return {
           
            isError: true
          }
        default: return oldState; 

}
}
