var React = require('react');
var NavBar = require('../components/Navbar');

var styles = {
  container: {
    width: '100%',
    height: '92%'
  }
}

var Main = React.createClass({
  render: function() {
      return (
            <div style={styles.container}>
              <NavBar />
                {this.props.children}
            </div>
        )
    }
})

module.exports = Main
