'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var c = 'key-value';

exports.default = _react2.default.createClass({
  displayName: 'KeyValue',
  propTypes: {
    rows: _react.PropTypes.arrayOf(_react.PropTypes.shape({
      keyItem: _react.PropTypes.string,
      valueItem: _react.PropTypes.string
    })),
    onChange: _react.PropTypes.func,
    customAddButtonRenderer: _react.PropTypes.func
  },
  getDefaultProps: function getDefaultProps() {
    return {
      rows: [],
      onChange: function onChange() {}
    };
  },
  getInitialState: function getInitialState() {
    return {
      rows: [].concat(_toConsumableArray(this.props.rows))
    };
  },
  handleAddNew: function handleAddNew() {
    var _this = this;

    this.setState({
      rows: [].concat(_toConsumableArray(this.state.rows), [{
        keyItem: '',
        valueItem: ''
      }])
    }, function () {
      _this.props.onChange([].concat(_toConsumableArray(_this.state.rows)));
    });
  },
  handleKeyItemChange: function handleKeyItemChange(index, value) {
    var _this2 = this;

    this.setState({
      rows: this.state.rows.map(function (row, i) {
        if (index !== i) {
          return row;
        }
        return _extends({}, row, {
          keyItem: value
        });
      })
    }, function () {
      _this2.props.onChange([].concat(_toConsumableArray(_this2.state.rows)));
    });
  },
  handleValueItemChange: function handleValueItemChange(index, value) {
    var _this3 = this;

    this.setState({
      rows: this.state.rows.map(function (row, i) {
        if (index !== i) {
          return row;
        }
        return _extends({}, row, {
          valueItem: value
        });
      })
    }, function () {
      _this3.props.onChange([].concat(_toConsumableArray(_this3.state.rows)));
    });
  },
  handleRemove: function handleRemove(index) {
    var _this4 = this;

    this.setState({
      rows: this.state.rows.filter(function (row, i) {
        return i !== index;
      })
    }, function () {
      _this4.props.onChange([].concat(_toConsumableArray(_this4.state.rows)));
    });
  },
  renderKeyItem: function renderKeyItem(index, value) {
    var _this5 = this;

    return _react2.default.createElement(
      'label',
      null,
      'Key:',
      _react2.default.createElement('input', {
        type: 'text',
        value: value,
        onChange: function onChange(e) {
          return _this5.handleKeyItemChange(index, e.currentTarget.value);
        }
      })
    );
  },
  renderValueItem: function renderValueItem(index, value) {
    var _this6 = this;

    return _react2.default.createElement(
      'label',
      null,
      'Value:',
      _react2.default.createElement('input', {
        type: 'text',
        value: value,
        onChange: function onChange(e) {
          return _this6.handleValueItemChange(index, e.currentTarget.value);
        }
      })
    );
  },
  renderRows: function renderRows() {
    var _this7 = this;

    return this.state.rows.map(function (row, i) {
      return _react2.default.createElement(
        'div',
        {
          key: 'key-value-row-' + i,
          className: c + '-row'
        },
        _react2.default.createElement(
          'div',
          { className: c + '-row-key-item' },
          _this7.renderKeyItem(i, row.keyItem)
        ),
        _react2.default.createElement(
          'div',
          { className: c + '-row-value-item' },
          _this7.renderValueItem(i, row.valueItem)
        ),
        _react2.default.createElement(
          'div',
          { className: c + '-row-remove' },
          _react2.default.createElement(
            'button',
            {
              onClick: function onClick() {
                return _this7.handleRemove(i);
              }
            },
            '-'
          )
        )
      );
    });
  },
  renderAddButton: function renderAddButton() {
    if (typeof this.props.customAddButtonRenderer === 'function') {
      return this.props.customAddButtonRenderer(this.handleAddNew);
    }
    return _react2.default.createElement(
      'button',
      {
        onClick: this.handleAddNew
      },
      'Add new'
    );
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: c },
      _react2.default.createElement(
        'div',
        { className: c + '-rows' },
        this.renderRows()
      ),
      _react2.default.createElement(
        'div',
        { className: c + '-add-new' },
        this.renderAddButton()
      )
    );
  }
});