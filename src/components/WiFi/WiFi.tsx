import styles from './WiFi.module.scss';
import { wifi } from '../../assets/';

const WiFi: React.FC = () => {
  return (
    <section className={styles.info_section}>
      <div className={styles.container}>
        <div className={styles.h_container}>
          <img src={wifi} alt="Безопасность" loading="lazy" />
          <h2>Порядок подключения к сети Wi-Fi Mangazeya-Staff</h2>
        </div>

        <div className={styles.p_container}>
          <p>
            В офисах и на площадках Группы компаний Мангазея действует
            корпоративная сеть Mangazeya-Staff. Вы можете найти подробную
            инструкцию для подключения к гостевой сети
            <a
              href="http://hr.mangazeya.local/wp-content//themes/mangazeya/files/wifi1.docx"
              target="blank"
            >
              (путь к инструкции.)
            </a>
            При наличии вопросов по подключению к гостевой сети wi-fi
            обращайтесь в службу технической поддержки по номеру 5555 или по
            электронной почте:
            <a href="mailto:support@mangazeya.ru" target="blank">
              support@mangazeya.ru
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default WiFi;
