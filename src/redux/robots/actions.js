import {UserActionTypes} from  './actiontypes';

export const fetchRobotsStart = () =>({
    type:UserActionTypes.FETCH_ROBOTS_START,
})

export const fetchRobotsSuccess = user =>({
    type:UserActionTypes.FETCH_ROBOTS_SUCCESS,
    payload: user,
})

export const fetchRobotsFailure = errorMessage =>({
    type:UserActionTypes.FETCH_ROBOTS_FAILURE,
    payload: errorMessage,
})

export const addRobotsStart = payload =>({
    type:UserActionTypes.ADD_ROBOTS_START,
    payload: payload,
})

export const addRobotsSuccess = errorMessage =>({
    type:UserActionTypes.ADD_ROBOTS_SUCCESS,
    payload: errorMessage,
})

export const addRobotsFailure= errorMessage =>({
    type:UserActionTypes.ADD_ROBOTS_FAILURE,
    payload: errorMessage,
})

export const deleterobotStart = errorMessage =>({
    type:UserActionTypes.DELETE_ROBOTS_START,
    payload: errorMessage,
})