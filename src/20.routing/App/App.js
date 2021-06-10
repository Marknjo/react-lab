import { Suspense } from 'react';
import { lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuote = lazy(() => import('./pages/NewQuote'));
const NotFound = lazy(() => import('./pages/NotFound'));
const QuoteDetail = lazy(() => import('./pages/QuoteDetail'));
const Quotes = lazy(() => import('./pages/Quotes'));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
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

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
