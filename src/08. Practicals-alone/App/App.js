import AddUserInfoForm from './components/AddInfo/AddUserInfoForm';
import './App.css';
import ShowInfoLists from './components/ShowInfo/ShowInfoLists';
import Message from './helpers/Messages/Message';
import MessageOverlay from './helpers/Messages/MessageOverlay';
import { useState } from 'react';

//import { consoleSeparator } from './helpers/consoleSeparator'
const App = function () {
  //handle set errors
  const [isError, setIsError] = useState({
    valid: false,
    message: '',
  });

  //1. get  sanitized form submission data
  const [usersInfo, setUsersInfo] = useState([]);

  //handle page load
  if (usersInfo.length === 0)
    setUsersInfo([{ message: 'Fill the form to display age' }]);

  //2. Pass the data to the form
  const fetchSubmittedFormInfoHandler = userInfo => {
    setUsersInfo(prevState =>
      isError.valid
        ? prevState
        : [userInfo, ...prevState].filter(info => !info.message)
    );
  };

  //3. Handle errors if any
  const errorHandler = checkStatus => {
    setIsError(checkStatus);
  };

  return (
    <>
      <main className="container">
        <AddUserInfoForm
          usersInfo={usersInfo}
          onFetchSubmittedFormInfo={fetchSubmittedFormInfoHandler}
          onError={errorHandler}
        />
        <ShowInfoLists usersInfo={usersInfo} />
      </main>

      <Message isError={isError} onCloseModal={errorHandler} />
      <MessageOverlay isError={isError} onCloseModal={errorHandler} />
    </>
  );
};

export default App;
