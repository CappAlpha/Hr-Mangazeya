import styles from './App.module.scss';
import { Welcome } from './components/Welcome/Welcome';

function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <Welcome />
      </div>
    </>
  );
}

export default App;
