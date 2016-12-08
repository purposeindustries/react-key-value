import { mount, shallow } from 'enzyme';
import React from 'react';
import KeyValue from './key-value';

describe('ReactKeyValue', () => {

  it('should have the proper class name', () => {
    const $ = shallow(<KeyValue />);
    $.hasClass('key-value').should.be.true();
  });

  it('should set the default props', () => {
    const $ = mount(<KeyValue />);
    $.props().rows.should.be.an.Array();
    $.props().onChange.should.be.a.Function();
  });
  it('should get the initial state from the props');
  it('should handle adding new rows', () => {
    const $ = shallow(<KeyValue />);
    console.log(shallow($.instance().handleAddNew()));
  });
  it('should handle when a key changes');
  it('should handle when a value changes');
  it('should handle removing a row');
  it('should have a renderRows method', () => {
    const $ = shallow(<KeyValue />);
    $.instance().renderRows.should.be.a.Function();
  });
  it('should render the correct amount of rows with the correct content, set by props.rows', () => {
    const $ = mount(
      <KeyValue
        rows={[
          { keyItem: 'a', valueItem: 'A' },
          { keyItem: 'b', valueItem: 'B' }
        ]}
      />
    );
    $.props().rows.length.should.exactly(2);
    $.find('.key-value-row-key-item').at(0).find('input').props().value.should.eql('a');
    $.find('.key-value-row-value-item').at(0).find('input').props().value.should.eql('A');
    $.find('.key-value-row-key-item').at(1).find('input').props().value.should.eql('b');
    $.find('.key-value-row-value-item').at(1).find('input').props().value.should.eql('B');
  });
  it('should render an "Add new" button', () => {
    const $ = shallow(<KeyValue />);
    shallow($.instance().renderAddButton()).is('button').should.be.true();
    shallow($.instance().renderAddButton()).find('button').text().should.eql('Add new');
  });
  it('should render an "Add new" button with a custom method', () => {
    const renderCustomAddButton = () => {
      return(
        <div className="custom-add-button">
          Clicking on this item is pointless!
        </div>
      )
    };
    const $ = shallow(<KeyValue customAddButtonRenderer={ renderCustomAddButton } />);
    shallow($.instance().renderAddButton()).is('div').should.be.true();
    shallow($.instance().renderAddButton()).find('div').text().should.eql('Clicking on this item is pointless!');
  });
});
