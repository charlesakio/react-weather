var React = require('react');
var CityContainer = require('../containers/CityContainer');

var styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(252, 90, 44, 0.89)',
    color: '#fff',
    padding: 5,
  }
}


function NavBar () {
  return (
    <nav style={styles.navbar} role="navigation">
      <h2 style={{margin: 0}}>Clever Title</h2>
      <CityContainer direction='row' />
    </nav>
  )
}

module.exports = NavBar
