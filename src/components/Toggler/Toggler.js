import styles from './Toggler.module.scss';

function Toggler({ isSidebarOpen, setIsSidebarOpen, isTouched, setIsTouched }) {
  const toggler = (function setTogglerBasedOnState() {
    if (isSidebarOpen === false && isTouched === false) {
      return (
        <div
          className={styles.Toggler}
          onClick={() => {
            setIsSidebarOpen(true);
            setIsTouched(true);
          }}
        >
          <div className={styles.bars}></div>
        </div>
      );
    }

    if (isSidebarOpen === true && isTouched === true) {
      return (
        <div
          className={`${styles.Toggler} ${styles.active}`}
          onClick={() => setIsSidebarOpen(false)}
        >
          <div className={styles.bars}></div>
        </div>
      );
    }

    if (isSidebarOpen === false && isTouched === true) {
      return (
        <div
          className={`${styles.Toggler} ${styles.active} ${styles.inactive}`}
          onClick={() => setIsSidebarOpen(true)}
        >
          <div className={styles.bars}></div>
        </div>
      );
    }
  })();

  return <>{toggler}</>;
}

export default Toggler;
