import React from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

import ScatterChartExample from './ScatterChartExample'
import LineChartExample from './LineChartExample'
import WordTreeExample from './WordTreeExample'


class ChartsContainer extends React.Component {
  render() {
    return (
      <div className={'my-pretty-chart-container'}>
        <h1> GoogleCharts Examples </h1>
        <div>
          <LineChartExample />
          <ScatterChartExample />
          <WordTreeExample />
        </div>
      </div>
    );
  }
}

export default ChartsContainer
