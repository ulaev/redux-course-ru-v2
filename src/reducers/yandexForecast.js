import { GET_FORECAST_SUCCESS } from '../actions/YandexForecastActions'

const initialState = {
  forecast: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FORECAST_SUCCESS:
      return {
        ...state,
        forecast: action.payload.forecast,
      }

    default:
      return state
  }
}
