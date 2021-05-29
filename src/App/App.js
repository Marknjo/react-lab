import AddUserInfoForm from './components/AddInfo/AddUserInfoForm';
import './App.css';
import ShowInfoLists from './components/ShowInfo/ShowInfoLists';
import Message from './helpers/Messages/Message';

//import { consoleSeparator } from './helpers/consoleSeparator'
const App = function () {
  return (
    <main className="container">
      <AddUserInfoForm />
      <ShowInfoLists />
      <Message />
    </main>
  );
};

export default App;
