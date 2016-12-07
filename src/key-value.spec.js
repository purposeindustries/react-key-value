import { shallow } from 'enzyme';
import React from 'react';
import KeyValue from './key-value';

describe('ReactKeyValue', () => {

  it('should have the proper class name', () => {
    const $ = shallow(<KeyValue />);
    $.hasClass('key-value').should.be.true();
  });

  it('should set the default props');
  it('should get the initial state from the props');
  it('should handle adding new rows');
  it('should handle when a key changes');
  it('should handle when a value changes');
  it('should handle removing a row');
  it('should have a renderRows method');
  it('should render the correct amount of keyItems set by props.rows');
  it('should render the correct amount of valueItems set by props.rows');
  it('should render an "Add new" button');
  it('should render an "Add new" button with a custom method');
});
