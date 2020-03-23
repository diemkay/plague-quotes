import React from 'react';
import './index.css';
import QuoteActions from './QuoteActions';

const QuoteBox = ({ quote, newQuote, color }) => {
  const { text, author } = quote;

  return (
    <div id="quote-box" style={{ border: `10px solid ${color}` }}>
      <p id="text">{text}</p>
      <p id="author">{author}</p>
      <QuoteActions text={text} author={author} newQuote={newQuote} color={color} />
    </div>
  );
};

export default QuoteBox;
