import {combineReducers } from "redux";
import {reducer as formReducer} from "redux-form";

export default combineReducers({
    hello : ()=> "ramos",
    form : formReducer
})

