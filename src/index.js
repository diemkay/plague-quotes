import React from 'react';
import ReactDOM from 'react-dom';
import QuoteBox from './QuoteBox';
import './index.css';

const App = () => {
  return (
    <div>
      <h1>Pandemic Quote Generator</h1>
      <h2>Quotes to keep you company during tough times</h2>
      <p>
        In December 2019, a novel coronavirus strain (SARS-CoV-2) emerged in the city of
        Wuhan, China. The WHO declared the associated disease COVID-19 as a pandemic, and
        the world is still reeling.
      </p>

      <QuoteBox />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
