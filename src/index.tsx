import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    {/* <ChakraProvider> */}
    <Router>
      <Route exact path="/app" component={App} />
      <Route path="/app2" component={App2} />
    </Router>
    {/* </ChakraProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
