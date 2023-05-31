import styles from './Welcome.module.scss';
import { MangazeyaLogoHeader } from '../../assets';

const Welcome: React.FC = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.container}>
        <img
          src={MangazeyaLogoHeader}
          alt="Мангазея Девелопмент"
          loading="eager"
        />
      </div>
      <div className={styles.container}>
        <h1>Добро пожаловать в компанию «Мангазея Девелопмент»!</h1>
      </div>
    </div>
  );
};

export { Welcome };
