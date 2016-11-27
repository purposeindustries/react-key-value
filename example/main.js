import React from 'react';
import { render } from 'react-dom';
import { KeyValue } from '../src';

render(
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
  />,
  document.getElementById('root')
);
