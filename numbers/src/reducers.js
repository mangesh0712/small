
import {combineReducers} from "redux";

export const number= (initialNo= 0, action)=>{
    if (action.type === "INCREMENT"){
        return initialNo + action.payload;
    }
    else if (action.type === "DECREMENT"){
        return initialNo - action.payload;
    }
    return initialNo;
}

export default combineReducers({
    no: number
})
