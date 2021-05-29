import styles from './ShowInfoList.module.css';

const ShowInfoList = function ({ name, age }) {
  return (
    <li className={styles['info-lists__list']}>
      <p
        className={styles['info-list__content']}
      >{`${name} (${age} Years old)`}</p>
    </li>
  );
};

export default ShowInfoList;
