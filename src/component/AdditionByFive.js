import React from 'react'
import {connect } from 'react-redux'
import {addByFiveFN, subByFiveFN} from '../Redux'
import FetchRecordAxios from './fetchRecordAxios'

const AdditionByFive=({number, addByFiveFN, subByFiveFN})=>{
  return(
    <div>
       
      <h1>ADD By Five</h1>
      <input type='button' value='-5' onClick={subByFiveFN} />
      <span> {number} </span>
      <input type='button' value='+5' onClick={addByFiveFN} />
      <FetchRecordAxios />
    </div>
)}

const mapStateToProps=state=>{
  return {number:state.AddBy_Five_.numberFive}
}
const mapDispatchToProps=dispatch=>{
  return{
    addByFiveFN:()=>dispatch(addByFiveFN() ),
    subByFiveFN:()=>dispatch(subByFiveFN() )
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (AdditionByFive)
