import AddByOne from './Addition/AdditionReducer'
import AddByFive from './AddByFive/AddFiveReducer'

import { combineReducers } from 'redux'

const rootReducer=combineReducers({
  AddBy_One_:AddByOne,
  AddBy_Five_:AddByFive
})

export default rootReducer