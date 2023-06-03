import styles from './InternalPortal.module.scss';
import { portal } from '../../assets/';

const InternalPortal: React.FC = () => {
  return (
    <section className={styles.info_section}>
      <div className={styles.container}>
        <div className={styles.h_container}>
          <img src={portal} alt="Портал" loading="lazy" />
          <h2>Внутренний портал</h2>
        </div>

        <div className={styles.p_container}>
          <p>
            Сайт Группы компаний «Мангазея»
            <a href="https://mangazeya.ru/" target="blank">
              &nbsp;https://mangazeya.ru
            </a>
            . Все необходимые для работы документы, карточки и бланки
            организаций находятся на нашем{' '}
            <a
              href="http://intranet/Documents/DocLib1/Forms/AllItems.aspx"
              target="blank"
            >
              &nbsp;портале
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default InternalPortal;
