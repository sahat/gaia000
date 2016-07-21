import React from 'react';
import './styles.scss';

const SortDropdown = (props) => {
  return (
    <div className="SortDropdown">
      <div className="row">
        <div className="col-sm-3 col-sm-offset-9 col-xs-6 col-xs-offset-6">
          <div className="text-uppercase">Sort By</div>
          <select className="form-control">
            <option>Recommended</option>
            <option>Newest</option>
            <option>Popular</option>
          </select>
        </div>
      </div>
    </div>
  )
};

export default SortDropdown;
