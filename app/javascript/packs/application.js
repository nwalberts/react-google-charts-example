import React from 'react'
import ReactDOM from 'react-dom'

import GoogleCharts from '../react/components/GoogleCharts'


document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('app')

  if (reactElement) {
    ReactDOM.render(
      <GoogleCharts />,
      reactElement
    )
  }
})
