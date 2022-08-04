import {ADD_ONE} from './Additiontype'

const initialState={ number:7}

const AddOneReducer=(state=initialState, action)=>{

  switch(action.type){
    case ADD_ONE:
      return{ ...state, number:state.number+1}
    default: return state
  }
}
export default AddOneReducer