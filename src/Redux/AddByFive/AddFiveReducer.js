import {ADD_FIVE, SUB_FIVE} from './AddFiveType'

const initialState={
  numberFive:5
}

const AddFiveReducer =(state=initialState, action)=>{
  switch(action.type){
    case ADD_FIVE:
      return{...state, numberFive:state.numberFive+5}
    case SUB_FIVE:
      return{...state, numberFive:state.numberFive-5}
  
    default: return state  
  }
}
export default AddFiveReducer