import AddUserInfoForm from './components/AddInfo/AddUserInfoForm';
import './App.css';
import ShowInfoLists from './components/ShowInfo/ShowInfoLists';

//import { consoleSeparator } from './helpers/consoleSeparator'
const App = function () {
  return (
    <main className="container">
      <AddUserInfoForm />
      <ShowInfoLists />
    </main>
  );
};

export default App;
