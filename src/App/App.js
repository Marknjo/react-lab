import AddUserInfoForm from './components/AddInfo/AddUserInfoForm';
import './App.css';
import ShowInfoLists from './components/ShowInfo/ShowInfoLists';
import Message from './helpers/Messages/Message';
import MessageOverlay from './helpers/Messages/MessageOverlay';
import { useState } from 'react';

//import { consoleSeparator } from './helpers/consoleSeparator'
const App = function () {
  //handle errors
  const [isError, setIsError] = useState({
    valid: false,
    message: '',
  });
  const [usersInfo, setUsersInfo] = useState([]);
  //1. get  sanitized form submission data
  if (usersInfo.length === 0)
    setUsersInfo([{ message: 'Fill the form to display age' }]);

  const fetchSubmittedFormInfoHandler = userInfo => {
    setUsersInfo(prevState =>
      isError.valid
        ? prevState
        : [userInfo, ...prevState].filter(info => !info.message)
    );
  };

  //2. Pass the data to the form
  //3. Handle errors if any
  const handleErrorMessagesHandler = checkStatus => {
    setIsError(checkStatus);
  };

  return (
    <>
      <main className="container">
        <AddUserInfoForm
          usersInfo={usersInfo}
          onFetchSubmittedFormInfo={fetchSubmittedFormInfoHandler}
          onHandleErrorMessages={handleErrorMessagesHandler}
        />
        <ShowInfoLists usersInfo={usersInfo} />
      </main>

      <Message isError={isError} />
      <MessageOverlay isError={isError} />
    </>
  );
};

export default App;
