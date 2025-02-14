import React from 'react';
import ReactDOM from 'react-dom';
import DashboardRoute from './DashboardRoute';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Router><DashboardRoute /> </Router>, div);

  ReactDOM.unmountComponentAtNode(div);
});