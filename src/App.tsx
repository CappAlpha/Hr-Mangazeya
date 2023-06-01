import styles from './App.module.scss';
import Welcome from './components/Welcome/Welcome';
import Links from './components/Links/Links';

function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <Welcome />
        <Links />
      </div>
    </>
  );
}

export default App;
