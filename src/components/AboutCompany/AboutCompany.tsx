import styles from './AboutCompany.module.scss';

const AboutCompany: React.FC = () => {
  return (
    <section className={styles.root}>
      <div className={styles.video_container}>
        <iframe
          src="https://www.youtube.com/embed/ECLMsRYrw1Q"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.container}>
        <h2>О компании</h2>

        <p>
          Стремительно развивающаяся компания «Мангазея Девелопмент» реализует
          проекты жилой и коммерческой недвижимости в сегментах бизнес и комфорт
          с 2012 года. «Мангазея Девелопмент» работает с ведущими архитектурными
          бюро, что обеспечивает современный и эстетичный облик зданий. Внимание
          к деталям и комплексный подход в реализации проектов формируют высокий
          уровень комфорта. Каждый жилой комплекс от «Мангазеи Девелопмент»
          продуман до мелочей, имеет оптимально развитые социальную, спортивную
          и коммерческую инфраструктуры. Общая площадь проектов компании
          составляет 605,3 тыс. м2. В портфель «Мангазеи Девелопмент» входят
          четыре успешно сданных досрочно объекта: ЖК «Пикассо», ЖК «Марьина
          Роща», ЖК «Измайлово Lane», ЖК «ТЫ и Я». Сегодня девелопер реализует
          жилой комплекс бизнес-класса «Интонация» и разрабатывает несколько
          новых площадок. «Мангазея Девелопмент» входит в состав российской
          диверсифицированной группы компаний «Мангазея», которая ведет свою
          деятельность в пяти направлениях реального сектора экономики.
        </p>

        <p>
          «Мангазея Девелопмент» входит в состав российской диверсифицированной
          группы компаний «Мангазея», которая ведет свою деятельность в пяти
          направлениях реального сектора экономики.
        </p>
      </div>
    </section>
  );
};

export default AboutCompany;
