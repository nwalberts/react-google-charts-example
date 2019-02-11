import React from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

class TestChart extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    fetch("api/v1/students")
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({data: body.data})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let data = this.state.data
    // let data = [
    //   ['Cohort Number', 'Awesomeness', 'Stress Levels'],
    //   ['53',  1000,      400],
    //   ['54',  1170,      460],
    //   ['55',  660,       1120],
    //   ['56',  1201,      602],
    //   ['57',  1250,      650],
    //   ['58',  1500,      630],
    //   ['59',  1030,      800]
    // ]
    debugger;
    return (
      <div className={'my-pretty-chart-container'}>
        <div>
          <h2> Below is an example Test Chart</h2>
          <Chart
            chartType="BarChart"
            data={data}
          />
        </div>
      </div>
    );
  }
}

export default TestChart

// [
//   ["Students", "Snarkiness", "Relaxation"],
//   [5, 20, 11],
//   [3, 2, 24],
//   [7, 14, 18]
// ]
