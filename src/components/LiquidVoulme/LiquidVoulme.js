import styles from './LiquidVolume.module.scss';

function LiquidVolume({ glassVolume, liquidHeight, calories }) {
  const liquidVolume = Math.floor(glassVolume * (liquidHeight / 100));
  const currentCalories = Math.floor((calories * liquidVolume) / 100);

  return (
    <div className={styles.LiquidVolume}>
      <p>{currentCalories} kcal</p>
      <p>
        <span>{liquidVolume}</span> / <span>{glassVolume} ml</span>
      </p>
    </div>
  );
}

export default LiquidVolume;
