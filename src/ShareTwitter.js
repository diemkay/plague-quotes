import React from 'react';

export const ShareTwitter = ({ quoteText, quoteAuthor }) => {
  return (
    <a href={`https://twitter.com/intent/tweet?text=${quoteText}`}>
      <button id="tweet-button">Share to Twitter</button>
    </a>
  );
};

//TODO: Finalize Intent
