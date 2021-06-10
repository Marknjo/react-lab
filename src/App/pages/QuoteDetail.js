import { Route, useParams } from 'react-router';
import Comments from '../components/comments/Comments';

const QuoteDetail = function () {
  const params = useParams();
  return (
    <section>
      <h1>Quote Details page</h1>
      <p>{params.quoteId}</p>

      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetail;
