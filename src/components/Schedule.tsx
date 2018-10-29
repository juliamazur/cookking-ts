import * as React from 'react';

export interface Props {
  items?: string[];
}

function Schedule({items = []}: Props) {
  return (
    <div data-test="Schedule">
      <ul>
        {
          items.map(item => {
            return(<li key={item} data-test="item">{item}</li>);
          })
        }
      </ul>
    </div>
  );
}

export default Schedule;

// helpers
