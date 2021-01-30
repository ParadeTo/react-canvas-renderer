import React from 'react'
import CanvasRenderer from './CanvasRenderer'

import Demo1 from './Demo1'
import Demo2 from './Demo2'

CanvasRenderer.render(<Demo1 />, document.getElementById('demo1'), {
  width: 400,
  height: 200,
  style: {
    backgroundColor: 'white',
    border: '1px solid gray',
  },
})
CanvasRenderer.render(
  <Demo2 deadline={new Date(2021, 1, 12, 0, 0, 0).getTime()} />,
  document.getElementById('demo2'),
  {
    width: 800,
    height: 200,
    style: {
      backgroundColor: 'red',
    },
  }
)
