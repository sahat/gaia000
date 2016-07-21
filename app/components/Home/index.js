import React from 'react';
import { connect } from 'react-redux'
import SortDropdown from '../SortDropdown';
import Thumbnail from '../Thumbnail';
import './styles.scss';



class Home extends React.Component {

  handleLoadMore(event) {
    window.alert('Loading more titles...');
  }

  render() {
    const { titles } = this.props;

    const thumbnails = titles.map((title) => {
      return <Thumbnail title={title} key={title.nid} />;
    });

    if (!thumbnails.length) {
      return <div className="Home__loading">Please wait...</div>
    }

    return (
      <div className="container">
        <SortDropdown />
        <div className="row">
          {thumbnails}
        </div>
        <div className="text-center">
          <button className="btn btn-primary Home__btn-load" onClick={this.handleLoadMore}>Load More</button>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    titles: state.app.titles
  };
};


export default connect(mapStateToProps)(Home);
