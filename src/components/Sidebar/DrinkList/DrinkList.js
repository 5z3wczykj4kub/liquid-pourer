import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './DrinkList.module.scss';

function DrinkList(props) {
  return (
    <ul className={styles.DrinkList}>
      <li>Choose your favourite drink:</li>
      {props.drinks.map(({ drinkType, icon }, index) => (
        <li
          key={drinkType}
          onClick={() => {
            props.setSelectedDrink(props.drinks[index]);
            props.setIsSidebarOpen(false);
          }}
        >
          {drinkType}
          <FontAwesomeIcon icon={icon} />
        </li>
      ))}
    </ul>
  );
}

export default DrinkList;
