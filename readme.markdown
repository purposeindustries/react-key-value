##React-key-value

[![CircleCI](https://circleci.com/gh/purposeindustries/react-key-value.svg?style=svg)](https://circleci.com/gh/purposeindustries/react-key-value)

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

####onChange

```jsx
<KeyValue onChange={ handleOnChange } />
```
`onChange` is called every time when the `rows` changes. `onChange` gets the `rows` array as the first function parameter.

####customAddButtonRenderer

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
`customAddButtonRenderer`'s prop, `onClick` should call the `handleAddNew` function, which is the first parameter of `customAddButtonRenderer`.

###Try out the example

```
npm run start
```
