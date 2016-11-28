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
<KeyValue rows=[] />
```
By default `rows` is empty. `rows` have objects containing `keyItem` and `valueItem` strings.

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
`customAddButtonRenderer` is a function, which has the `handleAddNew` function as its first parameter. For an `onClick` function's parameter should be `handleAddNew` function.

###Try out the example

```
npm run start
```
