import React, { Component } from 'react';
import { connect } from 'react-redux';
import { downvoteQuote, upvoteQuote, removeQuote } from '../actions/quotes';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
    let cards = this.props.quotes.map(quote => <QuoteCard quote={quote} key={quote.id} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} removeQuote={this.props.removeQuote} />)

    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {cards}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
export default connect(state => ({quotes: state.quotes}), {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
