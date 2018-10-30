import { connect } from 'react-redux'
import { getForecast } from '../../../actions/YandexForecastActions'
import WeatherForecastPure from './WeatherForecastPure'

const mapStateToProps = store => {
  return {
    forecast: store.forecast,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getForecast: params => dispatch(getForecast(params)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherForecastPure)
