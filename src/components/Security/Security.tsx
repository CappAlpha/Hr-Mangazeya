import styles from './Security.module.scss';
import { security } from '../../assets';

const Security: React.FC = () => {
  return (
    <section className={styles.info_section}>
      <div className={styles.container}>
        <div className={styles.h_container}>
          <img src={security} alt="Безопасность" loading="lazy" />
          <h2>Правила информационной безопасности</h2>
        </div>

        <div className={styles.p_container}>
          <p>
            Основные правила безопасности мы сформировали в
            <a
              href="http://hr.mangazeya.local/assets/security_notions.pdf"
              target="blank"
            >
              информационном письме
            </a>
            с которым, рекомендуем ознакомиться для сохранения безопасности
            данных компании. Также, есть не большая
            <a
              href="http://hr.mangazeya.local/assets/security_password.pdf"
              target="blank"
            >
              памятка
            </a>
            с рекомендациями по формированию нового пароля.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Security;
