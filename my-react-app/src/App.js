import './css/main.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DonatePage from './components/DonatePage';
import FundraiserPage from './components/FundraiserPage';
import JobsPage from './components/JobsPage';
import AboutPage from './components/AboutPage';
import FAQPage from './components/FAQPage';
import StatisticsPage from './components/StatisticsPage';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/donate" component={DonatePage} />
          <Route path="/fundraiser" component={FundraiserPage} />
	  <Route path="/statistics" component={StatisticsPage} />
          <Route path="/jobs" component={JobsPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/faq" component={FAQPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;