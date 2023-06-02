import styles from './App.module.scss';
import Welcome from './components/Welcome/Welcome';
import Links from './components/Links/Links';
import IntroVideo from './components/IntroVideo/IntroVideo';
import AboutCompany from './components/AboutCompany/AboutCompany';

function App() {
  return (
    <div className={styles.wrapper}>
      <Welcome />
      <Links />
      <IntroVideo />
      <AboutCompany />
    </div>
  );
}

export default App;
