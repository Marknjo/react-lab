import Card from '../../UI/Card';
import ShowInfoList from './ShowInfoList';
import styles from './ShowInfoLists.module.css';

const ShowInfoLists = function () {
  const usersInfo = [
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

  console.log(usersInfo);
  return (
    <Card>
      <ul className={styles['info-lists']}>
        {usersInfo.map(userInfo => (
          <ShowInfoList
            key={userInfo.id}
            name={userInfo.username}
            age={userInfo.age}
          />
        ))}
      </ul>
    </Card>
  );
};

export default ShowInfoLists;
