var React = require('react');
var Forecast = require('../components/Forecast');

var getCurrentWeather = require('../helpers/api').getCurrentWeather
var getForeCast = require('../helpers/api').getForeCast

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    console.log('getInitialState')
    return {
      isLoading: true,
     // forecastInfo: []
    }
  },
  componentDidMount: function() {
    //Refer: https://github.com/charlesakio/react_tutorial/blob/lifecycle/app/containers/ConfirmBattleContainer.js
    var query = this.props.location.query
    //console.log('In ForecastContainer.componenDidMount ' + query)
    getCurrentWeather(query.city)  
    getForeCast(query.city) 
    this.setState({
      isLoading: false
    })
  },
  componentWillMount: function() {
    console.log('componentWillMount')
  },
  componentWillUnmount: function() {
    console.log('componentWillUnMount')
  },
  render: function () {
    return (
      <Forecast 
        isLoading={this.state.isLoading}  
      />
    )
  }
});

module.exports = ForecastContainer;
