import React from 'react';
import { connect } from 'react-redux'
import { loadGaia } from '../../actions/app'
import Header from '../Header';
import Home from '../Home';
import Hero from '../Hero';
import './styles.scss';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadGaia());
  }
  
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Home />
      </div>
    );
  }
}

export default connect()(App);

