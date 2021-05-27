import "./styles/main.scss";
import { consoleSeparator } from "./helpers/consoleSeparator";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  consoleSeparator();
  return (
    <div>
      <h1>Hello React App</h1>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
