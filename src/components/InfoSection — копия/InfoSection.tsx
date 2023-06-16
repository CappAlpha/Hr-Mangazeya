import styles from './InfoSection.module.scss';
import { security } from '../../assets';

const InfoSection: React.FC = () => {
  return (
    <section className={styles.info_section}>
      <div className={styles.container}>
        <img src={security} alt="Безопасность" loading="lazy" />

        <div className={styles.text_container}>
          <h3>Правила информационной безопасности</h3>
          <p>
            Основные правила безопасности мы сформировали в
            <a
              href="http://hr.mangazeya.local/assets/security_notions.pdf"
              target="blank"
            >
              &nbsp;информационном письме&nbsp;
            </a>
            с которым, рекомендуем ознакомиться для сохранения безопасности
            данных компании. Также, есть не большая
            <a
              href="http://hr.mangazeya.local/assets/security_password.pdf"
              target="blank"
            >
              &nbsp;памятка&nbsp;
            </a>
            с рекомендациями по формированию нового пароля.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
