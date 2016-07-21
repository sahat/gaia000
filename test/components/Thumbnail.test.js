import React from 'react';
import { shallow, render } from 'enzyme';
import { expect } from 'chai';
import apiFixture from '../fixtures/api.json';
import Thumbnail from '../../app/components/Thumbnail';

const episodicTitle = apiFixture.app.titles[0];
const episodeTitle = apiFixture.app.titles[2];
const videoTitle = apiFixture.app.titles[4];

describe('Thumbnail component', () => {
  it('should not render without title prop', () => {
    const component = render(<Thumbnail />);
    expect(component.find('.Thumbnail')).to.have.length(0);
  });

  it('renders a thumbnail', () => {
    const component = render(<Thumbnail title={episodicTitle} />);
    expect(component.find('.Thumbnail')).to.have.length(1);
    expect(component.find('.Thumbnail__more')).to.have.length(1);
  });

  it('displays episodic thumbnail', () => {
    const component = shallow(<Thumbnail title={episodicTitle} />);
    expect(component.find('.Thumbnail__meta')).to.have.length(1);
    expect(component.containsMatchingElement(<div className="Thumbnail__ribbon">series</div>)).to.equal(true);
  });

  it('displays episode thumbnail', () => {
    const component = shallow(<Thumbnail title={episodeTitle} />);
    expect(component.render().find('.Thumbnail__meta')).to.have.length(3);
    expect(component.containsMatchingElement(<em className="Thumbnail__meta">Arcanum</em>)).to.equal(true);
  });

  it('displays video thumbnail', () => {
    const component = shallow(<Thumbnail title={videoTitle} />);
    expect(component.find('.Thumbnail__play')).to.have.length(1);
  });
});
