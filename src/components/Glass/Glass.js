import { useState, useEffect } from 'react';

import Button from '../Button/Button';
import Liquid from '../Liquid/Liquid';
import LiquidVolume from '../LiquidVoulme/LiquidVoulme';

import styles from './Glass.module.scss';

function Glass({ selectedDrink }) {
  const [liquidHeight, setLiquidHeight] = useState(0);
  const [isPouring, setIsPouring] = useState(false);
  const [isSpilling, setIsSpilling] = useState(false);

  function pourLiquidHandler() {
    if (liquidHeight === 100) return;
    setIsPouring(true);
  }

  function stopPouringLiquidHandler() {
    setIsPouring(false);
  }

  function spillLiquidHandler() {
    if (liquidHeight === 0) return;
    setIsSpilling(true);
  }

  function stopSpillingLiquidHandler() {
    setIsSpilling(false);
  }

  useEffect(
    function changeLiquidHeightBasedOnAction() {
      let intervalId;
      if (isPouring)
        intervalId = setInterval(
          () => setLiquidHeight((prevLiquidHeight) => prevLiquidHeight + 1),
          50
        );
      if (isSpilling)
        intervalId = setInterval(
          () => setLiquidHeight((prevLiquidHeight) => prevLiquidHeight - 1),
          50
        );
      return () => clearInterval(intervalId);
    },
    [isPouring, isSpilling]
  );

  useEffect(
    function keepLiquidHeightInRange() {
      if (isPouring && liquidHeight === 100) setIsPouring(false);
      if (isSpilling && liquidHeight === 0) setIsSpilling(false);
    },
    [liquidHeight, isPouring, isSpilling]
  );

  const { drinkType, liquidColor, hasMugEar, glassVolume, calories } =
    selectedDrink;

  useEffect(
    function resetLiquidHeightOnDrinkChange() {
      setLiquidHeight(0);
    },
    [drinkType]
  );

  return (
    <>
      <LiquidVolume
        glassVolume={glassVolume}
        liquidHeight={liquidHeight}
        calories={calories}
      />
      <div className={`${styles.Glass} ${styles[drinkType]}`}>
        {hasMugEar && <div className={styles.mugEar}></div>}
        {drinkType === 'wine' && (
          <>
            <div className={styles.stem}></div>
            <div className={styles.base}></div>
          </>
        )}
        <Liquid
          liquidHeight={liquidHeight}
          liquidColor={liquidColor}
          drinkType={drinkType}
        />
      </div>
      <div className={styles.controls}>
        <Button
          isChanging={isSpilling}
          changeLiquidHeight={spillLiquidHandler}
          stopChangingLiquidHeight={stopSpillingLiquidHandler}
        >
          Spill
        </Button>
        <Button
          isChanging={isPouring}
          changeLiquidHeight={pourLiquidHandler}
          stopChangingLiquidHeight={stopPouringLiquidHandler}
        >
          Pour
        </Button>
      </div>
    </>
  );
}

export default Glass;
