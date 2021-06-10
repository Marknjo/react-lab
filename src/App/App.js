import { Redirect, Route, Switch } from 'react-router';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';
import Quotes from './pages/Quotes';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="quotes" />
        </Route>

        <Route path="/new-quote">
          <NewQuote />
        </Route>

        <Route path="/quotes" exact>
          <Quotes />
        </Route>

        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
