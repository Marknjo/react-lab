import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = function () {
  const addQuoteHandler = quoteData => {
    console.log(quoteData);
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
