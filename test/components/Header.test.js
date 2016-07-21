import React from 'react';
import { shallow, render } from 'enzyme';
import { expect } from 'chai';
import Header from '../../app/components/Header';

describe('Header component', () => {
  const component = shallow(<Header />);

  it('displays hero container', () => {
    expect(component.find('header')).to.have.length(1);
  });

  it('displays gaia logo', () => {
    expect(component.find('.Header__logo')).to.have.length(1);
  });

  it('contains correct subheader links', () => {
    expect(component.containsMatchingElement(<a href="#">Yoga</a>)).to.equal(true);
    expect(component.containsMatchingElement(<a href="#">Customers</a>)).to.equal(true);
    expect(component.containsMatchingElement(<a href="#">Seeking Truth</a>)).to.equal(true);
    expect(component.containsMatchingElement(<a href="#">Transformation</a>)).to.equal(true);
    expect(component.containsMatchingElement(<a href="#">Films & Docs</a>)).to.equal(true);
    expect(component.containsMatchingElement(<a href="#">Centers</a>)).to.equal(true);
  });
});
