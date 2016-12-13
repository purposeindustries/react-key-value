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
    $.props().rows.length.should.exactly(0);
    $.props().onChange.should.be.a.Function();
  });
  it('should get the initial state from the props', () => {
    const rows = [{ keyItem: 'a', valueItem: 'A' }];
    const $ = mount(<KeyValue rows={ rows } />);
    $.state().rows.should.eql(rows);
  });
  it('should update the state when adding new rows', () => {
    const $ = shallow(
      <KeyValue
        rows={ [{ keyItem: 'a', valueItem: 'A' }] }
      />);
    $.find('.key-value-add-new').find('button').simulate('click');
    $.state('rows').should.eql([
      { keyItem: 'a', valueItem: 'A' },
      { keyItem: '', valueItem: '' }
    ]);
  });
  it('should set the placeholder texts for the key input field', () => {
    const keyInputPlaceholder = 'Key name';
    const valueInputPlaceholder = 'and its value';
    const $ = shallow(
      <KeyValue
        rows={ [{ keyItem: 'a', valueItem: 'A' }] }
        keyInputPlaceholder={ keyInputPlaceholder }
        valueInputPlaceholder={ valueInputPlaceholder }
      />);
    $.find('.key-value-add-new').find('button').simulate('click');
    $.find('.key-value-row-key-item').find('input').at(0).props().placeholder.should.eql(keyInputPlaceholder);
    $.find('.key-value-row-value-item').find('input').at(0).props().placeholder.should.eql(valueInputPlaceholder);
  });
  it('should hide the valueInputLabel and the keyInputLabel', () => {
    const $ = shallow(<KeyValue hideLabels={ true } />);
    $.find('.key-value-add-new').find('button').simulate('click');
    $.find('.key-value-row-key-item').find('span').length.should.exactly(0);
    $.find('.key-value-row-value-item').find('span').length.should.exactly(0);
  });
  it('should show the valueInputLabel and the keyInputLabel by default', () => {
    const $ = shallow(<KeyValue />);
    $.find('.key-value-add-new').find('button').simulate('click');
    $.find('.key-value-row-key-item').find('span').length.should.exactly(1);
    $.find('.key-value-row-value-item').find('span').length.should.exactly(1);
  });
  it('should update the state when a key changes', () => {
    const $ = shallow(
      <KeyValue
        rows={ [
          { keyItem: 'a', valueItem: 'A' },
          { keyItem: 'b', valueItem: 'B' }
        ] }
      />
    );
    $.find('.key-value-row-key-item').at(1).find('input').simulate('change', { currentTarget: { value: 'z' }});
    $.state('rows').should.eql([
      { keyItem: 'a', valueItem: 'A' },
      { keyItem: 'z', valueItem: 'B' }
    ]);
  });
  it('should update the state when a value changes', () => {
    const $ = shallow(
      <KeyValue
        rows={ [
          { keyItem: 'a', valueItem: 'A' },
          { keyItem: 'b', valueItem: 'B' }
        ] }
      />
    );
    $.find('.key-value-row-value-item').at(0).find('input').simulate('change', { currentTarget: { value: 'Z' }});
    $.state('rows').should.eql([
      { keyItem: 'a', valueItem: 'Z' },
      { keyItem: 'b', valueItem: 'B' }
    ]);
  });
  it('should handle removing a row', () => {
    const $ = shallow(
      <KeyValue
        rows={ [
          { keyItem: 'a', valueItem: 'A' },
          { keyItem: 'b', valueItem: 'B' },
          { keyItem: 'c', valueItem: 'C' }
        ] }
      />
    );
    $.find('.key-value-row-remove').at(1).find('button').simulate('click');
    $.state('rows').should.eql(
      [
        { keyItem: 'a', valueItem: 'A' },
        { keyItem: 'c', valueItem: 'C' }
      ]
    );
  });
  it('should render the correct amount of rows with the correct content, set by props.rows', () => {
    const $ = mount(
      <KeyValue
        rows={ [
          { keyItem: 'a', valueItem: 'A' },
          { keyItem: 'b', valueItem: 'B' }
        ] }
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
    // eslint-disable-next-line react/display-name
    const renderCustomAddButton = () => {
      return (
        <div className="custom-add-button">
          Clicking on this item is pointless!
        </div>
      );
    };
    const $ = shallow(<KeyValue customAddButtonRenderer={ renderCustomAddButton } />);
    shallow($.instance().renderAddButton()).is('div').should.be.true();
    shallow($.instance().renderAddButton()).find('div').text().should.eql('Clicking on this item is pointless!');
  });
});
