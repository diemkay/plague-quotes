import React from 'react';
import QuoteBox from './QuoteBox';
import { getQuote } from './getQuote';
import { getColor } from './getColor';

class QuoteModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: getQuote(),
      currentColor: getColor(),
    };

    this.getNewQuote = this.getNewQuote.bind(this);
    this.setColor = this.setColor.bind(this);
  }

  getNewQuote() {
    const newQuote = getQuote();

    this.setState({
      currentQuote: newQuote,
    });
  }

  setColor() {
    const newColor = getColor();
    console.log(newColor);

    this.setState({
      currentColor: newColor,
    });
  }

  render() {
    return (
      <div id="parent-div">
        <img
          id="parent-image"
          src="https://i.postimg.cc/ry1kpPcD/rat.png"
          alt="rat"
          width="175px"
        />
        <QuoteBox
          color={this.state.currentColor}
          quote={this.state.currentQuote}
          newQuote={this.getNewQuote}
        />
      </div>
    );
  }
}

export default QuoteModel;
