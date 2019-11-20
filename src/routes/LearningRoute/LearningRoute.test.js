import React from 'react';
import ReactDOM from 'react-dom';
import LearningRoute from './LearningRoute';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Router><LearningRoute /> </Router>, div);

  ReactDOM.unmountComponentAtNode(div);
});