import { Link } from 'react-router-dom';

const Quotes = function () {
  return (
    <section>
      <h1>Quotes page</h1>
      <ul>
        <li>
          <Link to="/quotes/q1">Quote 1</Link>
        </li>
        <li>
          <Link to="/quotes/q2">Quote 2</Link>
        </li>
        <li>
          <Link to="/quotes/q3">Quote 3</Link>
        </li>
        <li>
          <Link to="/quotes/q4">Quote 4</Link>
        </li>
      </ul>
    </section>
  );
};

export default Quotes;