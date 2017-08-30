//SurveyNew holds the SurveyForm and SurveyReview
import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  state = { showFormReview: false };
  render() {
    return (
      <div>
        {this.state.showFormReview
          ? <SurveyFormReview />
          : <SurveyForm
              onSurveySubmit={() => this.setState({ showFormReview: true })}
            />}
      </div>
    );
  }
}

export default SurveyNew;
