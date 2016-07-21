import React from 'react';
import { shallow, render } from 'enzyme';
import { expect } from 'chai';
import SortDropdown from '../../app/components/SortDropdown';

describe('SortDropdown component', () => {
  it('displays sort by dropdown', () => {
    const component = render(<SortDropdown />);
    expect(component.find('.SortDropdown')).to.have.length(1);
  });

  it('has correct sorting selections', () => {
    const component = shallow(<SortDropdown />);
    expect(component.containsMatchingElement(<option>Recommended</option>)).to.equal(true);
    expect(component.containsMatchingElement(<option>Newest</option>)).to.equal(true);
    expect(component.containsMatchingElement(<option>Popular</option>)).to.equal(true);
  });
});
