import React from 'react';
import { FaTwitter } from 'react-icons/fa';

const QuoteBox = () => {
  const quotes = [
    {
      text:
        "She closed her eyes; and in the sweet slumber lying her spirit tiptoed from its lodging place. It's folly to shrink in fear, if this is dying; for death looked lovely in her face.",
      author: 'Petrarch',
    },
    {
      text:
        'As both Boccaccio and Stefani suggest, many people seem to have died not because they had particularly virulent cases of plague, but because the individuals who normally cared for them were either dead or ill themselves.',
      author: 'John Kelly',
    },
    {
      text:
        'Additionally, many widows took over family shops or businesses- and, not uncommonly, ran them better than their dead husbands. Y.pestis [black death germ] turns out to have been something of a feminist.',
      author: 'John Kelly',
    },
    {
      text:
        'Fourteenth-century men seemed to have regarded their doctor in rather the same way as the twentieth-century men are apt to regard their priest, with tolerance for someone who was doing his best and the respect due to a man of learning but also with a nagging and uncomfortable conviction that he was largely irrelevant to the real and urgent problems of their lives.',
      author: 'Phillip Kelly',
    },
    {
      text: 'Every age gets the lunatics it deserves.',
      author: 'Roy Porter',
    },
    {
      text:
        'No one ever thinks they’re awful, even people who really actually are. It’s some sort of survival mechanism.',
      author: 'Emily St. John Mandel',
    },
  ];

  const TwitterShare = () => (
    <a id="tweet-quote" href="https://twitter.com/intent/tweet">
      <FaTwitter />
      Share on Twitter
    </a>
  );

  return (
    <div id="quote-box">
      <p id="text">
        No one ever thinks they’re awful, even people who really actually are. It’s some
        sort of survival mechanism.
      </p>
      <p id="author">Emily St. John Mandel</p>
      <button id="new-quote">Generate new quote</button>
      <TwitterShare />
    </div>
  );
};

export default QuoteBox;
