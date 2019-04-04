import {combineReducers} from "redux";

export const dataReducer=(data=[],action)=>{
if(action.type === "GETDATA"){
    return [...data,action.data]
}
return data;
}

export default combineReducers({
   data : dataReducer
})