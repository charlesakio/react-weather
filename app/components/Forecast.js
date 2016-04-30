var React = require('react');
var PropTypes = React.PropTypes;

var getDate = require('../helpers/weatherConverters').getDate

var styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center'
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  weather: {
    height: 130
  }
}

function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function DayItem (props) {
  var date = getDate(props.day.dt)
  var icon = props.day.weather[0].icon
  //console.log(date)
  //console.log(icon)
  return (
    <div style={styles.dayContainer}>
      <img style={styles.weather} src={'./app/img/weather-icons/' + icon + '.svg'} alt='Weather' />
      <h2 style={styles.subheader}>{date}</h2>
    </div>
  )
}

function ForecastUI (props) { 

  return (
    <div>
      <h1 style={styles.header}>{props.forecast.city.name}</h1>
        <div style={styles.container}>
          {props.forecast.list.map(function (listItem) {
            return <DayItem key={listItem.dt} day={listItem} />
          })}
        </div>
    </div>
  )
}

function Forecast (props) {
  return props.isLoading === true
  ? <p> LOADING </p>
  : <div>
      <ForecastUI  forecast={props.forecastInfo} />
    </div>
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  forecastInfo: PropTypes.object.isRequired
}
module.exports = Forecast
