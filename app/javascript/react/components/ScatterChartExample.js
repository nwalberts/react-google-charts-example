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
            data={[
              // ['Age', 'Weight'], [4, 7], [5, 6], [6, 7], [7, 8], [8, 9]
              ['Cohort Number', 'Awesomeness', 'Stress Levels'],
              ['53',  1000,      400],
              ['54',  1170,      460],
              ['55',  660,       1120],
              ['56',  1201,      602],
              ['57',  1250,      650],
              ['58',  1500,      630],
              ['59',  1030,      800]
            ]}
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
