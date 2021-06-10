import { useParams } from 'react-router';

const QuoteDetail = function () {
  const params = useParams();
  return (
    <section>
      <h1>Quote Details page</h1>
      <p>{params.quoteId}</p>
    </section>
  );
};

export default QuoteDetail;
