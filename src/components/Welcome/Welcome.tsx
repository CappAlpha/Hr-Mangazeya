import styles from './Welcome.module.scss';
import { Logo } from '../../assets';
import Links from '../Links/Links';

const Welcome: React.FC = () => {
  return (
    <section className={styles.welcome}>
      <div className={styles.container}>
        <img src={Logo} alt="Мангазея Девелопмент" loading="eager" />
      </div>
      <div className={styles.container}>
        <h1>Добро пожаловать в компанию «Мангазея Девелопмент»!</h1>
      </div>
      <Links />
      <div className={styles.welcome_gradient}></div>
    </section>
  );
};

export default Welcome;
