import styles from './Liquid.module.scss';

function Liquid(props) {
  const liquidStyles = {
    width: '100%',
    height: `${props.liquidHeight}%`,
    backgroundColor: props.liquidColor,
  };

  return (
    <div className={`${styles.LiquidWrapper} ${styles[props.drinkType]}`}>
      <div className={styles.Liquid} style={liquidStyles}></div>
    </div>
  );
}

export default Liquid;
