import React from 'react'
import ReactDOM from 'react-dom'

import ChartsContainer from '../react/components/ChartsContainer'


document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('app')

  if (reactElement) {
    ReactDOM.render(
      <ChartsContainer />,
      reactElement
    )
  }
})
