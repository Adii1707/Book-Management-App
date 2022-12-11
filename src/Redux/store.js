import { applyMiddleware, compose, legacy_createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as Appreducer } from "./AppReducer/reducer";
import {reducer as Authreducer} from "./AuthReducer/reducer";

const rootReducer = combineReducers({Appreducer, Authreducer})

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;




const store = legacy_createStore(rootReducer,
   composeEnhancers(applyMiddleware(thunk)) );

export {store};