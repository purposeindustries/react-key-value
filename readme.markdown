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
