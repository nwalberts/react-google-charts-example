import React from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

const blandData = [
      ['Cohort Number', 'Awesomeness', 'Stress Levels'],
      ['53',  1000,      500],
      ['54',  1000,      500],
      ['55',  1000,      500],
      ['56',  1000,      500],
      ['57',  1000,      500],
      ['58',  1000,      500],
      ['59',  1000,      500]
    ]


class TestChart extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
    this.getStudents = this.getStudents.bind(this)
  }

  getStudents(){
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

  componentDidMount(){
    this.getStudents()
  }

  toggleAwesomeness(){
    if (this.state.data !== blandData ) {
      this.setState({data: blandData})
    } else {
      getStudents()
    }
  }

  render() {
    const chartEvents = [
      {
        eventName: "select",
        callback({ chartWrapper }) {
          let chart = chartWrapper.getChart()
          let selectedItem = chart.getSelection()
          console.log("Selected ", selectedItem);
        }
      }
      // {
      //   eventName: "select",
      //   callback({ chartWrapper }) {
      //     debugger
      //     this.toggleAwesomeness
      //   }
      // }
    ];

    return (
      <div className={'my-pretty-chart-container'}>
        <div>
          <h2> Below is an example Test Chart</h2>
          <Chart
            chartType="BarChart"
            data={this.state.data}
            chartEvents={chartEvents}
          />
        </div>
      </div>
    );
  }
}

export default TestChart
