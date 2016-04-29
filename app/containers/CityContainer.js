var React = require('react');
var PropTypes = React.PropTypes;
var City = require('../components/City');

var getCurrentWeather = require('../helpers/api').getCurrentWeather
var getForeCast = require('../helpers/api').getForeCast

var CityContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getDefaultProps: function () {
    return {
      direction: 'column'
    }
  },
  propTypes: {
    direction: PropTypes.string
  },
  getInitialState: function () {
    return {
      city: '',
    }
  },
  handleSubmitCity: function (e) {
    e.preventDefault();
    console.log(this.state.city)
    
    this.context.router.push({
      //Go to url + pathname 
      pathname: '/forecast/' + this.state.city,

      //Pass object state, this.state.city to key called query
      //Accessible for the next url using this.props.location.query____
      query: {
        city: this.state.city
      }
    })
  },
  handleUpdateCity: function (event) {
    this.setState({
      city: event.target.value
    });
  },
  render: function () {
    return (
      <City
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        direction={this.props.direction}
        city={this.state.city} 
      />
    )
  }
});

module.exports = CityContainer
