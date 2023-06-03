import styles from './BaseSystems.module.scss';
import { _1C } from '../../assets/';

const BaseSystems: React.FC = () => {
  return (
    <section className={styles.info_section}>
      <div className={styles.container}>
        <div className={styles.h_container}>
          <img src={_1C} alt="1C" loading="lazy" />
          <h2>Основные электронные системы, используемые в компании</h2>
        </div>

        <div className={styles.p_container}>
          <p>
            1С документооборот (согласование договоров, приказов, актов,
            служебных записок); Бит строительство (оплаты счетов). Для создания
            учетной записи, расширения прав в данных системах необходимо
            написать запрос в поддержку пользователей
            <a href="mailto:support@mangazeya.ru" target="blank">
              &nbsp;support@mangazeya.ru
            </a>
            . По
            <a
              href="http://intranet/Documents/Instructions/Forms/AllItems.aspx"
              target="blank"
            >
              &nbsp;ссылке&nbsp;
            </a>
            вы найдете основные инструкции по работе с электронными системами.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BaseSystems;
