var React = require('react');
var PropTypes = React.PropTypes;
var City = require('../components/City');

var CityContainer = React.createClass({
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
    var city = this.state.city;
    console.log(city)
    //this.setState({
    //  city: ''
   // });
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
