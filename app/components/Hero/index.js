import React from 'react';
import { connect } from 'react-redux'
import './styles.scss';

class Hero extends React.Component {
  render() {
    const { term } = this.props;

    if (!term) {
      return null;
    }

    return (
      <section className="Hero" style={{ background: `url('${term.termImages.hero.hero_1440x300}')` }}>
        <h1 className="Hero__title">{term.name}</h1>
        <p className="Hero__description">{term.body}</p>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    term: state.app.term
  };
};

export default connect(mapStateToProps)(Hero);
