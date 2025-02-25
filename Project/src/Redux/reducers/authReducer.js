import { SIGN_OUT, SIGNUP_SUCCESS, SINGIN_SUCCESS } from "../actions/authAction";

const initState = {
    user:JSON.parse(localStorage.getItem("user"))||null,
    
}

export const authReducer = (state=initState,action)=>{
    console.log(action)
    switch(action.type){
        //beacause both are giving same rresponses
        case SIGNUP_SUCCESS:
        case SINGIN_SUCCESS:
            localStorage.setItem("user",JSON.stringify(action.payload)); //save the user to the localStorage
            return {...state,user:action.payload}
        case SIGN_OUT:
            localStorage.removeItem("user")
            return {...state,user:null}
        default:
            return state;
    }
};

