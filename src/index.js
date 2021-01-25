import React from 'react'
import CanvasRenderer from './CanvasRenderer'

import App from './App'

const rootElement = document.getElementById('root')
CanvasRenderer.render(<App />, rootElement)
