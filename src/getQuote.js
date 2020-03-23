export const getQuote = () => {
  const allQuotes = [
    {
      text:
        'Neither physicians nor medicines were effective. Whether because these illnesses were previously unknown or because physicians had not previously studied them, there seemed to be no cure.',
      author: 'Marchione di Coppo Stefani',
    },

    {
      text:
        'There was such a fear that no one seemed to know what to do. When it took hold in a house, it often happened that no one remained who had not died.',
      author: 'Marchione di Coppo Stefani',
    },
    {
      text:
        'Many people seem to have died not because they had particularly virulent cases of plague, but because the individuals who normally cared for them were either dead or ill themselves.',
      author: 'John Kelly',
    },
    {
      text:
        'Many widows took over family shops or businesses- and, not uncommonly, ran them better than their dead husbands. Y.pestis turns out to have been something of a feminist.',
      author: 'John Kelly',
    },

    {
      text:
        'No one ever thinks they’re awful, even people who really actually are. It’s some sort of survival mechanism.',
      author: 'Emily St. John Mandel',
    },

    {
      text:
        'The natural human inclination to seek companionship and support from one’s neighbors was short-circuited. No one wanted to catch whatever was killing everybody.',
      author: 'Dan Carlin',
    },

    {
      text:
        "We tell ourselves that pestilence is a mere bogy of the mind, a bad dream that will pass away. But it doesn't always pass away and, from one bad dream to another, it is men who pass away.",
      author: 'Albert Camus',
    },
    {
      text:
        'He knew quite well that it was plague and, needless to say, he also knew that, were this to be officially admitted, the authorities would be compelled to take very drastic steps.',
      author: 'Albert Camus',
    },
    {
      text:
        'The public lacked, in short, standards of comparison. It was only as time passed and the steady rise in the death-rate could not be ignored that public opinion became alive to the truth.',
      author: 'Albert Camus',
    },
    {
      text:
        "At the beginning of a pestilence and when it ends, there's always a propensity for rhetoric.",
      author: 'Albert Camus',
    },
    {
      text:
        "What's natural is the microbe. All the rest — health, integrity, purity (if you like) — is a product of the human will, of a vigilance that must never falter.",
      author: 'Albert Camus',
    },
  ];

  const randomQuoteIndex = Math.floor(Math.random() * allQuotes.length);

  return allQuotes[randomQuoteIndex];
};
