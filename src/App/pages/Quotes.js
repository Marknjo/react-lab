import { Link } from 'react-router-dom';
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Mark', text: 'Learning React is super fun!' },
  { id: 'q2', author: 'Njoroge', text: 'Learning React is rather enjoyabe' },
];

const Quotes = function () {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default Quotes;
