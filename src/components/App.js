import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import SideMenu from './sideMenu/SideMenu';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {

    return (
      <div>
        <Header />
        <SideMenu />
        <br/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;