import { consoleSeparator } from './helpers/consoleSeparator';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = function () {
  consoleSeparator();

  return (
    <div>
      <NewExpense />
      <Expenses />
    </div>
  );
};

export default App;
