import React from 'react'
import { render } from 'react-dom'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import { Provider } from 'react-redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import { MuiThemeProvider } from '@material-ui/core/styles'
import styles from './styles/index.less'
import theme from './styles/mui_theme.js'
import reducers from './reducers/index'
import {App} from './components/App.jsx'
import initialState from './initialState.js'
const IS_DEV = process.env.IS_DEV === 'true'
const logger = createLogger()
const store = configureStore(initialState)

render(
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
          <App />
      </Provider>
    </MuiThemeProvider>
    ,document.getElementById('app')
)

if(module.hot && IS_DEV) {
  module.hot.accept("./components/App.jsx", () => {
    const {App: NextApp} = require('./components/App.jsx')
    render(
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <NextApp />
        </Provider>
      </MuiThemeProvider>
      ,document.getElementById('app')
    )
  })
}


function configureStore(initialData) {
  const store = createStore(reducers, initialData, applyMiddleware(thunk, promise))

  if (module.hot && IS_DEV) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index.js');
      store.replaceReducer(nextRootReducer);
    })
  }

  return store
}
