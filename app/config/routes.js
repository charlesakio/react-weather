var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require('../components/Main');
var HomeContainer = require('../containers/HomeContainer');
var CityContainer = require('../containers/CityContainer');
var ForecastContainer = require('../containers/ForecastContainer');
var WeatherDetail = require('../components/WeatherDetail');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={HomeContainer} />
      <Route path='forecast/:city' header='forecast' component={ForecastContainer} />
      <Route path='details/:city' header='details' component={WeatherDetail} />
    </Route>
  </Router>
);

module.exports = routes
