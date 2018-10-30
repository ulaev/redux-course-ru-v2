import request from '../utils/api'

export const GET_FORECAST_REQUEST = 'GET_FORECAST_REQUEST'
export const GET_FORECAST_SUCCESS = 'GET_FORECAST_SUCCESS'
export const GET_FORECAST_ERROR = 'GET_FORECAST_ERROR'

export const getForecast = ({ lat, lon }) => {
  return dispatch => {
    dispatch({
      type: GET_FORECAST_REQUEST,
    })

    return request({
      url: `https://api.weather.yandex.ru/v1/forecast?lat=${lat}&lon=${lon}`,
      method: 'GET',
      headers: {
        'X-Yandex-API-Key': '', //ключ тут
        'Access-Control-Allow-Origin': '*',
        crossDomain: true,
      },
    })
      .then(response => {
        dispatch({
          type: GET_FORECAST_SUCCESS,
          payload: { points: response.data },
        })
      })
      .catch(error => {
        dispatch({
          type: GET_FORECAST_ERROR,
          payload: error,
        })

        throw error
      })
  }
}
