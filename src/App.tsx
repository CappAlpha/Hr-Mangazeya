import styles from './App.module.scss';
import Welcome from './components/Welcome/Welcome';
import AboutCompany from './components/AboutCompany/AboutCompany';
import InfoSection from './components/InfoSection/InfoSection';

function App() {
  return (
    <div className={styles.wrapper}>
      <Welcome />
      {/* <AboutCompany /> */}
      <InfoSection />
    </div>
  );
}

export default App;
