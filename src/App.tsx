import styles from './App.module.scss';
import Welcome from './components/Welcome/Welcome';
import AboutCompany from './components/AboutCompany/AboutCompany';
import InfoSection from './components/InfoSection/InfoSection';
import ContactsSection from './components/ContactsSection/ContactsSection';

function App() {
  return (
    <div className={styles.wrapper}>
      <Welcome />
      {/* <AboutCompany /> */}
      <InfoSection />
      <ContactsSection />
    </div>
  );
}

export default App;
