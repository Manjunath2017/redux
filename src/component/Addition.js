import React, { Fragment, useState, useEffect } from 'react'
import { addOneFN, subOneFN } from '../Redux' 
import {connect} from 'react-redux'
import AdditionByFive from './AdditionByFive'

const Addition =({number, addOneFN, subOneFN})=>{
  const [display, setDispley]=useState(true)

  const changeHeading=()=>{
    console.log('display', display)
    setDispley(!display)
    console.log('display', display)
  }

  useEffect(() => {
    console.log('changeHandle')
  }, [changeHeading])  
  console.log('number', number)
  return(
  <Fragment >
    <div style={{textAlign:'center'}}>
    {display&&
      (<h1 >Addition and Substraction </h1>) 
    }
    <h1 style={{display}}> Heading</h1>
      <div>
        <input type='button' onClick={changeHeading} value={display? 'hide Heading':'unhide Heading'} /> 
      </div>

      
      <input type='button' value='-' onClick={subOneFN} />
      <span> {number} </span>
      <input type='button' value='+' onClick={addOneFN} />
    <AdditionByFive />
    </div>
    
  </Fragment>
)}

const mapStateToProps=state=>{ //state
console.log(state.AddBy_One_)
  return {number:state.AddBy_One_.number}
}

const mapDispatchToProps=dispatch=>{ //update state, calling fn
  return{ 
    addOneFN:()=> dispatch(addOneFN() ),
    subOneFN:()=> dispatch(subOneFN() )
  }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Addition)
