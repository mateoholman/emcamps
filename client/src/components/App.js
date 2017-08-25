//The client-side rendering control
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import Header from './Header';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
