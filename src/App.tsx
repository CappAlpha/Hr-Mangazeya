import styles from './App.module.scss';
import Welcome from './components/Welcome/Welcome';
import Links from './components/Links/Links';
import IntroVideo from './components/IntroVideo/IntroVideo';
import AboutCompany from './components/AboutCompany/AboutCompany';
import Security from './components/Security/Security';
import WiFi from './components/WiFi/WiFi';
import InternalPortal from './components/InternalPortal/InternalPortal';
import RulesTerminal from './components/RulesTerminal/RulesTerminal';

function App() {
  return (
    <div className={styles.wrapper}>
      <Welcome />
      <Links />
      <IntroVideo />
      <AboutCompany />
      <Security />
      <WiFi />
      <InternalPortal />
      <RulesTerminal />
    </div>
  );
}

export default App;
