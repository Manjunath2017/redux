import AddByOne from './Addition/AdditionReducer'
import AddByFive from './AddByFive/AddFiveReducer'
import fetchRecordAxios from './fetchRecodAxios/fetchRecodAxiosReducer'

import { combineReducers } from 'redux'

const rootReducer=combineReducers({
  AddBy_One_:AddByOne,
  AddBy_Five_:AddByFive,
  users:fetchRecordAxios
})

export default rootReducer