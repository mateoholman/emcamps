import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import PieChart from './PieChart';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div
          className="card horizontal blue-grey darken-2 survey-card"
          key={survey._id}
        >
          <div className="card-image">
            <PieChart yes={survey.yes} no={survey.no} />
            <div className="legend-yes">
              <a className="light-blue-text accent-2">
                Yes: {survey.yes}
              </a>
            </div>
            <div className="legend-no">
              <a className="yellow-text">
                No: {survey.no}
              </a>
            </div>
          </div>
          <div className="card-stacked">
            <div className="card-content white-text">
              <span className="card-title">
                {survey.title}
              </span>
              <p>
                {survey.body}
              </p>
            </div>
            <div className="card-action">
              <p className="right white-text">
                Sent On: {new Date(survey.dateSent).toLocaleDateString()}
              </p>
              <p className="right white-text">
                Last Responded:{' '}
                {new Date(survey.lastResponded).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
