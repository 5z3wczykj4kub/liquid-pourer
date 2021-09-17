import styles from './Sidebar.module.scss';

function Sidebar(props) {
  const sidebar = props.isSidebarOpen ? (
    <div className={`${styles.Sidebar} ${styles.active}`}>{props.children}</div>
  ) : (
    <div className={styles.Sidebar}>{props.children}</div>
  );

  return sidebar;
}

export default Sidebar;
