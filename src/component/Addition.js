import React, { Fragment } from 'react'
import { addOneFN } from '../Redux' //state
import {connect} from 'react-redux'

const Addition =({number, addOneFN})=>{
  console.log('number', number)
  return(
  <Fragment >
    <div style={{textAlign:'center'}}>
      <h1 >Addition </h1> 
      <input type='button' value='+' onClick={addOneFN} />
      <h1> {number} </h1>
    </div>
  </Fragment>
)}

const mapStateToProps=state=>{
console.log(state.AddBy_One_)
  return {number:state.AddBy_One_.number}
}

const mapDispatchToProps=dispatch=>{
  return{ addOneFN:()=> dispatch(addOneFN() )}
}

export default  connect(mapStateToProps,mapDispatchToProps)(Addition)
