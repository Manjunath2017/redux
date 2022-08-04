import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import AdditionReducer from './Addition/AdditionReducer'
import thunk from 'redux-thunk'

import rootReducer from './RootReducer'

const store=createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
export default store

