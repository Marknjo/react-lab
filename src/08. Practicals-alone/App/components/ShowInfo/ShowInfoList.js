import styles from './ShowInfoList.module.css';

const ShowInfoList = function ({ name, age, message }) {
  return (
    <li className={styles['info-lists__list']}>
      <p className={message ? '' : styles['info-list__content']}>
        {message ? message : `${name} (${age} Years old)`}
      </p>
    </li>
  );
};

export default ShowInfoList;
