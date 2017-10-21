import React from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

class ScatterChartExample extends React.Component {
  render() {
    return (
      <div className={'my-pretty-chart-container'}>
        <div>
          <h2> Below is an example Scatter Chart</h2>
          <Chart
            chartType="ScatterChart"
            data={[['Age', 'Weight'], [8, 12], [4, 5.5]]}
            options={{}}
            graph_id="ScatterChart"
            width="100%"
            height="400px"
            legend_toggle
          />
        </div>
      </div>
    );
  }
}

export default ScatterChartExample
