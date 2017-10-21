import React from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

class WordTreeExample extends React.Component {
  render() {

    let data =  [  ['phrase', 'size', 'value'],
            ['poros are better than dogs', 1, 8],
            ['poros eat kibble', 1, 5],
          ]

    return (
      <div className={'my-pretty-chart-container'}>
        <div>
          <h2> Below is an example Word Tree</h2>
          <Chart
            chartType="WordTree"
            data={data}
            options={{
              format: 'explicit',
              word: 'Poros'
            }}
            graph_id="WordTree"
            width="100%"
            height="1000px"
            legend_toggle
          />
        </div>
      </div>
    );
  }
}

export default WordTreeExample
