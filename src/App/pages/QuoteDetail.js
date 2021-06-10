import { Route, useParams, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Mark', text: 'Learning React is super fun!' },
  { id: 'q2', author: 'Njoroge', text: 'Learning React is rather enjoyabe' },
];

const QuoteDetail = function () {
  const params = useParams();
  const match = useRouteMatch();

  const quote = DUMMY_QUOTES.find(quote => params.quoteId === quote.id);

  if (!quote) {
    return <NoQuotesFound />;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
