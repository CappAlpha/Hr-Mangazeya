import styles from './App.module.scss';
import Welcome from './components/Welcome/Welcome';
import AboutCompany from './components/AboutCompany/AboutCompany';
import Security from './components/Security/Security';
import WiFi from './components/WiFi/WiFi';
import InternalPortal from './components/InternalPortal/InternalPortal';
import RulesTerminal from './components/RulesTerminal/RulesTerminal';
import BaseSystems from './components/BaseSystems/BaseSystems';

function App() {
  return (
    <div className={styles.wrapper}>
      <Welcome />
      <AboutCompany />
      <Security />
      <WiFi />
      <InternalPortal />
      <RulesTerminal />
      <BaseSystems />
    </div>
  );
}

export default App;
