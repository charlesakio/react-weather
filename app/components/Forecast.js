var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var PropTypes = React.PropTypes;

var DayItem = require('./DayItem');
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
}

function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ForecastUI (props) { 
  return (
    <div>
      <h1 style={styles.header}>{props.city}</h1>
        <div style={styles.container}>
          {props.forecast.list.map(function (listItem) {
            return <DayItem key={listItem.dt} day={listItem} handleClick={props.handleClick.bind(null, listItem)} />
          })}
        </div>
    </div>
  )
}

function Forecast (props) {
  return ( 
    <div>
      {
        props.isLoading === true
          ? <p> LOADING </p>
          : <ForecastUI 
              city={props.city} 
              forecast={props.forecastInfo} 
              handleClick={props.handleClick}
            />
      }
    </div>
  )
}

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  forecastInfo: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}
module.exports = Forecast
