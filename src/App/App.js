import "./styles/main.scss";
import { consoleSeparator } from "./helpers/consoleSeparator";

function App() {
  consoleSeparator();
  return (
    <div>
      <h1>Hello React App</h1>
      <p>This is also visible</p>
    </div>
  );
}

export default App;
