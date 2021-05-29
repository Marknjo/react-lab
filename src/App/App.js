import AddUserInfoForm from './components/AddInfo/AddUserInfoForm';
import './App.css';
import ShowInfoLists from './components/ShowInfo/ShowInfoLists';
import Message from './helpers/Messages/Message';
import MessageOverlay from './helpers/Messages/MessageOverlay';
import { useState } from 'react';

//import { consoleSeparator } from './helpers/consoleSeparator'
const App = function () {
  const [usersInfo, setUsersInfo] = useState([]);
  //1. get  sanitized form submission data
  const fetchSubmittedFormInfoHandler = userInfo => {
    setUsersInfo(userInfo);
  };

  if (usersInfo.length === 0)
    setUsersInfo([{ message: 'Fill the form to display age' }]);
  //2. Pass the data to the form
  //3. Handle errors if any

  return (
    <>
      <main className="container">
        <AddUserInfoForm
          onFetchSubmittedFormInfo={fetchSubmittedFormInfoHandler}
        />
        <ShowInfoLists usersInfo={usersInfo} />
      </main>

      <Message />
      <MessageOverlay />
    </>
  );
};

export default App;
