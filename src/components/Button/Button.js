import styles from './Button.module.scss';

function Button(props) {
  const className = `${styles.Button} ${props.isChanging ? styles.active : ''}`;

  return (
    <button
      className={className}
      onTouchStart={props.changeLiquidHeight}
      onTouchEnd={props.stopChangingLiquidHeight}
      onTouchMove={props.stopChangingLiquidHeight}
      onMouseDown={props.changeLiquidHeight}
      onMouseUp={props.stopChangingLiquidHeight}
      onMouseLeave={props.stopChangingLiquidHeight}
    >
      {props.children}
    </button>
  );
}

export default Button;
