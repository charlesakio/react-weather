var React = require('react');
var PropTypes = React.PropTypes;

function Forecast (props) {
  return props.isLoading === true
  ? <p> LOADING </p>
  : <div>NOT LOADING</div>
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired
}
module.exports = Forecast
