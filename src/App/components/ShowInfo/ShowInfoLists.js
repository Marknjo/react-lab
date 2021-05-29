import { useState } from 'react';
import Card from '../../UI/Card';
import ShowInfoList from './ShowInfoList';
import styles from './ShowInfoLists.module.css';

/*
const usersInfo_dummy = [
   {
      id: Math.random().toString().slice(2, 15),
      username: 'Leon',
      age: 31,
    },
    {
      id: Math.random().toString().slice(2, 15),
      username: 'Sam',
      age: 29,
    },
    {
      id: Math.random().toString().slice(2, 15),
      username: 'Jeff',
      age: 36,
    }, 
];
*/

const ShowInfoLists = function ({ usersInfo }) {
  //handle page initial load state
  //1. users info is empty
  //2. Set message to tell user to add info in the UI

  return (
    <Card>
      <ul className={styles['info-lists']}>
        {usersInfo.map(userInfo => {
          if (userInfo.message) {
            return (
              <ShowInfoList
                key={Math.random().toString().slice(2, 15)}
                message={userInfo.message}
              />
            );
          } else {
            return (
              <ShowInfoList
                key={userInfo.id}
                name={userInfo.username}
                age={userInfo.age}
              />
            );
          }
        })}
      </ul>
    </Card>
  );
};

export default ShowInfoLists;
