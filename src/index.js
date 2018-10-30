import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './store/configureStore'
import { Provider } from 'react-redux'
// import App from './containers/App'
import WeatherForecast from './components/screens/weatherForecast'

import { register as registerServiceWorker } from './serviceWorker'

import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <WeatherForecast />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
