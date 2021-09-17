import styles from './Button.module.scss';

const Button = {
  Pour: (props) =>
    props.isPouring ? (
      <button
        className={`${styles.Button} ${styles.active}`}
        onTouchStart={props.pourLiquid}
        onTouchEnd={props.stopPouringLiquid}
        onTouchMove={props.stopPouringLiquid}
        onMouseDown={props.pourLiquid}
        onMouseUp={props.stopPouringLiquid}
        onMouseLeave={props.stopPouringLiquid}
      >
        {props.children}
      </button>
    ) : (
      <button
        className={styles.Button}
        onTouchStart={props.pourLiquid}
        onTouchEnd={props.stopPouringLiquid}
        onTouchMove={props.stopPouringLiquid}
        onMouseDown={props.pourLiquid}
        onMouseUp={props.stopPouringLiquid}
        onMouseLeave={props.stopPouringLiquid}
      >
        {props.children}
      </button>
    ),
  Drink: (props) =>
    props.isDrinking ? (
      <button
        className={`${styles.Button} ${styles.active}`}
        onTouchStart={props.drinkLiquid}
        onTouchEnd={props.stopDrinkingLiquid}
        onTouchMove={props.stopDrinkingLiquid}
        onMouseDown={props.drinkLiquid}
        onMouseUp={props.stopDrinkingLiquid}
        onMouseLeave={props.stopDrinkingLiquid}
      >
        {props.children}
      </button>
    ) : (
      <button
        className={styles.Button}
        onTouchStart={props.drinkLiquid}
        onTouchEnd={props.stopDrinkingLiquid}
        onTouchMove={props.stopDrinkingLiquid}
        onMouseDown={props.drinkLiquid}
        onMouseUp={props.stopDrinkingLiquid}
        onMouseLeave={props.stopDrinkingLiquid}
      >
        {props.children}
      </button>
    ),
};

export default Button;
