import React, { Component } from 'react';
import { Pie } from 'react-chartjs';

class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [
        {
          color: '#40c4ff',
          highlight: '#0091ea',
          label: 'Yes',
          value: this.props.yes
        },
        {
          color: '#ffeb3b',
          highlight: '#fdd835',
          label: 'No',
          value: this.props.no
        }
      ],
      chartOptions: {
        responsive: true
      }
    };
  }
  render() {
    return (
      <div className="chart-container">
        <Pie
          data={this.state.chartData}
          options={this.state.chartOptions}
          width="100px"
          height="100px"
        />
      </div>
    );
  }
}

export default PieChart;
