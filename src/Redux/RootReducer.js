import AddByOne from './Addition/AdditionReducer'

import { combineReducers } from 'redux'

const rootReducer=combineReducers({
  AddBy_One_:AddByOne
})

export default rootReducer