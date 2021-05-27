import { consoleSeparator } from './helpers/consoleSeparator';

import Expenses from './components/Expenses/Expenses';

const App = function () {
  consoleSeparator();

  return (
    <div>
      <h1>Expenses App</h1>

      <Expenses />
    </div>
  );
};

export default App;
