import React from 'react';
import { FaTwitter } from 'react-icons/fa';

const QuoteActions = ({ text, author, newQuote, color }) => {
  return (
    <div id="quote-actions">
      <a
        href={`https://twitter.com/intent/tweet?text="${text}" — ${author}`}
        target="_blank"
        rel="noopener noreferrer"
        id="tweet-quote"
      >
        <button
          id="tweet-button"
          style={{ border: `2px solid ${color}`, color: `${color}` }}
        >
          <FaTwitter id="tweet-icon" size={18} />
          Tweet
        </button>
      </a>
      <button
        id="new-quote"
        style={{ border: `2px solid ${color}`, backgroundColor: `${color}` }}
        onClick={newQuote}
      >
        New Quote
      </button>
    </div>
  );
};

export default QuoteActions;
