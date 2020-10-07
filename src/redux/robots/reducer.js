import {UserActionTypes} from  './actiontypes';

const INITIAL_STATE={
    robotsList: [] ,
    isFetching: false,
    errorMessage: undefined
}

const userReducer=(state=INITIAL_STATE, action)=>{
    switch(action.type){
        case UserActionTypes.FETCH_ROBOTS_START:
            return {
              ...state,
              isFetching: true
            };
        case UserActionTypes.FETCH_ROBOTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                robotsList:action.payload
            }
        case UserActionTypes.FETCH_ROBOTS_FAILURE:
            return {
                ...state,
            errorMessage:action.payload,
            isFetching: false,
        }
            
        default:
            return state;
    }
}   

export default userReducer;