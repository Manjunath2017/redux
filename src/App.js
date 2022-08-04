import logo from './logo.svg';
import './App.css';
import React,{ Fragment } from 'react';
import Addition from './component/Addition'
import { Provider } from 'react-redux'
import store from './Redux/store'

const App=()=> {
  return(
  <Fragment>
    <Provider store={store}>
      <h1> ..... </h1>
      <Addition />
    </Provider>
  </Fragment>
  )}

export default App
