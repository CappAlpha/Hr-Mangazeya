import styles from './Welcome.module.scss';
import { MangazeyaLogoWelcome } from '../../assets';

const Welcome: React.FC = () => {
  return (
    <section className={styles.welcome}>
      <div className={styles.container}>
        <img
          src={MangazeyaLogoWelcome}
          alt="Мангазея Девелопмент"
          loading="eager"
        />
      </div>
      <div className={styles.container}>
        <h1>Добро пожаловать в компанию «Мангазея Девелопмент»!</h1>
      </div>
    </section>
  );
};

export default Welcome;
