import axios from 'axios' 

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './fetchRecodAxiosType'

export const fetchUsersRequest=()=>{
  return{ type:FETCH_USERS_REQUEST}
}

const fetchUsersSuccess=users=>{
  return{
    type:FETCH_USERS_SUCCESS,
    payload:users
  }
}

const fetchUsersFailure=error=>{
  return{
    type:FETCH_USERS_FAILURE,
    payload:error
  }
}

export const fetchUsersFN=()=>{
  return(dispatch)=>{
    dispatch(fetchUsersRequest) // call above function .. request
    axios.get('https://jsonplaceholder.typicode.com/users')
          .then(response=>{
            const users=response.data
            dispatch(fetchUsersSuccess(users)) //call above function.... pass data 
          })
          .catch(error=>{
            const errorMsg=error.message
            dispatch(fetchUsersFailure(errorMsg))
          })
  }
}
