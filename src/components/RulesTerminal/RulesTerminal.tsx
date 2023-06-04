import styles from './RulesTerminal.module.scss';

const RulesTerminal: React.FC = () => {
  return (
    <section className={styles.info_section}>
      <div className={styles.container}>
        <div className={styles.h_container}>
          <h2>Правила пользования терминальным сервером</h2>
        </div>

        <div className={styles.p_container}>
          <p>
            Для корректной и комфортной работы на терминальном сервере
            рекомендуем придерживаться следующих простейших рекомендаций:
          </p>
          <ul>
            <li>
              Терминальный сервер – это ваш личный удаленный рабочий стол.
            </li>
            <li>Доступы к базам 1С исключительно на терминальном сервере.</li>
            <li>
              На терминальном сервере отсутствует корзина, и удаление данных с
              рабочего стола и других папок профиля имеет безвозвратный эффект.
            </li>
            <li>
              Для корректного завершения работы на терминальном сервере
              используйте красную кнопку «ВЫХОД ИЗ ТЕРМИНАЛА».
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RulesTerminal;
