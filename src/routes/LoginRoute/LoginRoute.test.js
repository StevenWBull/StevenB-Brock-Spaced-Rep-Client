import React from 'react';
import ReactDOM from 'react-dom';
import LoginRoute from './LoginRoute';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Router><LoginRoute /> </Router>, div);

  ReactDOM.unmountComponentAtNode(div);
});