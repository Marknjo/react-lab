import Card from '../../UI/Card';
import styles from './ShowInfoLists.module.css';

const ShowInfoLists = function () {
  return (
    <Card>
      <ul className={styles['info-lists']}>
        <li className={styles['info-lists__list']}>
          <p
            className={styles['info-list__content']}
          >{`Leon (31 Years old)`}</p>
        </li>
        <li className={styles['info-lists__list']}>
          <p className={styles['info-list__content']}>{`Sam (29 Years old)`}</p>
        </li>
        <li className={styles['info-lists__list']}>
          <p
            className={styles['info-list__content']}
          >{`Jeff (36 Years old)`}</p>
        </li>
      </ul>
    </Card>
  );
};

export default ShowInfoLists;
