import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound';

describe('NotFound', () => {
  const props = {
    title: 'No route',
  };

  const wrapper = shallow(<NotFound {...props} />);

  describe('common properties', () => {
    it('should render a <p> element', () => {
      expect(wrapper.find('p')).to.have.length(1);
    });

    it('should render the title as an h2', () => {
      const h2 = wrapper.find('h2');
      expect(h2.text()).to.contain('route');
    });
  });
});
