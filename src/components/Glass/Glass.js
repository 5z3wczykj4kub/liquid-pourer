import { useState, useEffect, useCallback } from 'react';

import Button from '../Button/Button';
import Liquid from '../Liquid/Liquid';

import styles from './Glass.module.scss';

function Glass({ selectedDrink }) {
  const [pourLiquidIntervalId, setPourLiquidIntervalId] = useState();
  const [drinkLiquidIntervalId, setDrinkLiquidIntervalId] = useState();
  const [liquidHeight, setLiquidHeight] = useState(0);
  const [isPouring, setIsPouring] = useState(false);
  const [isDrinking, setIsDrinking] = useState(false);

  const { drinkType, liquidColor, hasMugEar } = selectedDrink;

  useEffect(() => setLiquidHeight(0), [drinkType]);

  // pour handlers
  function pourLiquidHandler() {
    if (liquidHeight === 100) return;

    setIsPouring(true);

    setPourLiquidIntervalId(
      setInterval(() => {
        setLiquidHeight((prevLiquidHeight) => prevLiquidHeight + 1);
      }, 50)
    );
  }

  const stopPouringLiquidHandler = useCallback(() => {
    setIsPouring(false);
    clearInterval(pourLiquidIntervalId);
  }, [pourLiquidIntervalId]);

  // drink handlers
  function drinkLiquidHandler() {
    if (liquidHeight === 0) return;

    setIsDrinking(true);

    setDrinkLiquidIntervalId(
      setInterval(() => {
        setLiquidHeight((prevLiquidHeight) => prevLiquidHeight - 1);
      }, 50)
    );
  }

  const stopDrinkingLiquidHandler = useCallback(() => {
    setIsDrinking(false);
    clearInterval(drinkLiquidIntervalId);
  }, [drinkLiquidIntervalId]);

  useEffect(() => {
    if (liquidHeight === 100) stopPouringLiquidHandler();
    if (liquidHeight === 0) stopDrinkingLiquidHandler();
  }, [liquidHeight, stopPouringLiquidHandler, stopDrinkingLiquidHandler]);

  console.log(liquidHeight); // remove later

  return (
    <>
      <div className={`${styles.Glass} ${styles[drinkType]}`}>
        {hasMugEar && <div className={styles.mugEar}></div>}
        {drinkType === 'wine' && (
          <>
            <div className={styles.stem}></div>
            <div className={styles.stemBase}></div>
          </>
        )}
        <Liquid
          liquidHeight={liquidHeight}
          liquidColor={liquidColor}
          drinkType={drinkType}
        />
      </div>
      <div className={styles.controls}>
        <Button.Drink
          isDrinking={isDrinking}
          drinkLiquid={drinkLiquidHandler}
          stopDrinkingLiquid={stopDrinkingLiquidHandler}
        >
          Drink
        </Button.Drink>
        <Button.Pour
          isPouring={isPouring}
          pourLiquid={pourLiquidHandler}
          stopPouringLiquid={stopPouringLiquidHandler}
        >
          Pour
        </Button.Pour>
      </div>
    </>
  );
}

export default Glass;
