import { combineReducers } from 'redux'
import YandexForecastReducer from './yandexForecast'

export const rootReducer = combineReducers({
  forecast: YandexForecastReducer,
})
