This is a app for purpose of learning [React Google Charts](https://github.com/RakanNimer/react-google-charts)

Note that this is just a wrapper around the main library, [Google Charts](https://developers.google.com/chart/). You'll find a lot more information there as to how you can further customize your charts and visuals. In fact, in order to get the most from this library, its okay idea to go through the brief tutorial on the Google Charts website first. You'll likely be referring to it often.

This is using a React-Rails webpacker boilerplate w/ Postgress.
Setup commands
- `bundle` should do the trick
- `yarn install` if you need to install new node modules
- `rake db:create && rake db:migrate` to setup your DB

Server commands
- `rails server`
- `npm start` (separate tab)

#Walkthrough

```javascript
import React from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

class GoogleCharts extends React.Component {
  render() {
    return (
      <div className={'my-pretty-chart-container'}>
        <h1> Hello from GoogleCharts Example </h1>
        <div>
          <h2> Below is an example scatter Chart</h2>
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

export default GoogleCharts
```

There are a lot of charts to work with, but this library specifically works with Google Charts core library of charts (essentially the ones you may be used to from high school).

As you can see, we import that Chart component, which is essentially a wrapper component that helps us use React interact with the Google Charts API.

Example Chart Props:
- chartTypes: accepts a string argument of the type of chart you wish to load. A list of charts can be found at Google Charts website.
- data: This prop is the simpler option that you have for passing an array of arrays representing columns and rows for your data. The first array is going to represent the headers or axes of your chart. Each additional array is going to represent a datapoint on that chart, with the first and second value corresponding the the x and y axis respectively.

*Alternatively, you can specify columns and rows to be more explicit about your data.*
- columns: This prop is used for setting up the column information of your table. It accepts an array of objects with keys corresponding to type, label and id of the column in question. Each additional object will represent the new info of each column.
https://developers.google.com/chart/interactive/docs/reference#DataTable_addColumn
- rows: Accepts an array of arrays, with each array representing the data point you wish to add (with two elements pointing to x and y values)
https://developers.google.com/chart/interactive/docs/reference#addrow
- options: this prop will be an object with keys that you can set based on the type of chart you are using. Usually, `title`, `height`, `width`, and `legend` are options available on most charts. This is where the bulk of customization will begin for the chart you wish to use.

To see more options about the chart you are using, go to your chart types specific options table.
E.g. https://developers.google.com/chart/interactive/docs/gallery/scatterchart
**Note:** that `height`, `width` and a few other option keys can be passed in as their own props as well. You may have to dig into the Chart.js in the React Google Charts library to see what props are allowable, otherwise just pass them into the options object.


You should feel comfortable exploring each of the components that RakanNimer has defined, and see how the props he allows get passed to the Google Charts library.







<!-- import React from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

class BarChartExample extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: {}
    }
  }

  componentDidMount(){
    fetch("/api/v1/students")
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
      this.setState({ data: body.data });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {

    return (
      <div className={'my-pretty-chart-container'}>
        <div>
          <h2> Below is an example Bar Chart</h2>
          <Chart
            chartType="BarChart"
            data={}
            options={{}}
            graph_id="BarChart"
            width="100%"
            height="400px"
            legend_toggle
          />
        </div>
      </div>
    );
  }
}

export default BarChartExample -->
