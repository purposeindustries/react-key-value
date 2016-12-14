##React-key-value

[![CircleCI](https://circleci.com/gh/purposeindustries/react-key-value.svg?style=svg)](https://circleci.com/gh/purposeindustries/react-key-value)

[![Coverage Status](https://coveralls.io/repos/github/purposeindustries/react-key-value/badge.svg?branch=master)](https://coveralls.io/github/purposeindustries/react-key-value?branch=chore/master)

React key value is a key value visualiser/editor written in React

###Install

```
npm install react-key-value
```

###Usage

Include the main js module, e.g.:

```js
var KeyValue = require('react-key-value');
// or ES6
import KeyValue from 'react-key-value';
```

###Props

This module has the following props:

####rows

```jsx
<KeyValue rows=[{
  keyItem: '',
  valueItem: ''
  }] />
```
By default `rows` is empty. `rows` has objects containing `keyItem` and `valueItem` strings.

####hideLabels

```jsx
<KeyValue hideLabels={ true } />
```
It can be used for hiding the labels' texts (e.g. "Keys:" and "Values:"). Set to `false` by default.

####keyInputPlaceholder

```jsx
<KeyValue keyInputPlaceholder={ 'Key name' } />
```
You can set a placeholder text for the key input field.

####valueInputPlaceholder

```jsx
<KeyValue valueInputPlaceholder={ 'Key name' } />
```
You can set a placeholder text for the value input field.

####onChange

```jsx
<KeyValue onChange={ handleOnChange } />
```
`onChange` is called every time when the `rows` changes. `onChange` gets the `rows` array as the first function parameter.

####customAddButtonRenderer

You can create your own add button by the `createAddButtonRenderer` function. If set, it takes the `handleAddNew` function as the first parameter, which is responsible for the functionality of adding new fields in the `KeyValue` component. You should pass it to the element's `onClick` property.

Example:

```jsx
<KeyValue
  customAddButtonRenderer={ (handleAddNew) => (
    <div>
      <a
        href="#"
        onClick={ handleAddNew }
      >
        <span>+</span> Add new meta data
      </a>
    </div>
  ) }
  onChange={ (rows) => console.log(rows) }
/>
```

###Development
To develop run `npm start`.
You can test your changes by opening `localhost:4567` in a browser.
When you are happy with your changes you can build to dist with `npm run build`.


## License
See [LICENSE](LICENSE).

