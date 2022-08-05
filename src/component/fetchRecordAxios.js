import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchUsersFN} from '../Redux'


const FetchRecordAxios=({users, fetchUsersFN})=> {

useEffect(()=>{
  fetchUsersFN()
},[fetchUsersFN])
  console.log('users', users)
  return (
    <div>
      <h1> Fetch request </h1>
        {/*   {users.loading ?(<h1> Loading... </h1>): 
                  users.error?(<h1> {users.error} <h1/>):
            users.users?users.users.map(data=>(
              <p> {data.name}</p>
          )}
     } */}
     {
       users.loading?(
          <h1> Loading...</h1>
          ):users.error?(
            <h1> {users.error} </h1>
          ):(
            <>
              <h2>User List</h2>
              {users && users.users && users.users.map(user=>(
                <p> {user.name} </p>
              ))}
            </>
          )
     }

    </div>
  )
}
const mapStateToProps=state=>{
  console.log('state 12 ---', state)
  return{users:state.users}
}
const mapDispatchToProps=dispatch=>{
  return{ fetchUsersFN:()=>dispatch(fetchUsersFN())}
}
export default connect(mapStateToProps, mapDispatchToProps) (FetchRecordAxios)