// @flow
const React = require('react');
const ReactDOM = require('react-dom');
const toStatic = require('react-dom/server');
const routes = require('./config/routes');

toStatic(routes, document.getElementById('app'));
