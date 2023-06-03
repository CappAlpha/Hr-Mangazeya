import styles from './App.module.scss';
import Welcome from './components/Welcome/Welcome';
import Links from './components/Links/Links';
import IntroVideo from './components/IntroVideo/IntroVideo';
import AboutCompany from './components/AboutCompany/AboutCompany';
import Security from './components/Security/Security';
import WiFi from './components/WiFi/WiFi';

function App() {
  return (
    <div className={styles.wrapper}>
      <Welcome />
      <Links />
      <IntroVideo />
      <AboutCompany />
      <Security />
      <WiFi />
    </div>
  );
}

export default App;
