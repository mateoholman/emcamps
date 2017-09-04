//The dashboard page
import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
  return (
    <div className="indigo darken-2 dashboard">
      <SurveyList />
      <div className="fixed-action-btn">
        <Link
          to="/surveys/new"
          className="waves-effect waves-light btn-large z-depth-4 red"
        >
          <i className="material-icons left">add</i>
          New Survey
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
