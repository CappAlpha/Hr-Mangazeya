import styles from './AboutCompany.module.scss';
import { building1, building2, building3 } from '../../assets';

const AboutCompany: React.FC = () => {
  return (
    <section className={styles.about_section}>
      <div className={styles.container}>
        <div className={styles.h2_container}>
          <h2>О компании</h2>
        </div>
        <div className={styles.p_container}>
          <p>
            Стремительно развивающаяся компания «Мангазея Девелопмент» реализует
            проекты жилой и коммерческой недвижимости в сегментах бизнес и
            комфорт с 2012 года. «Мангазея Девелопмент» работает с ведущими
            архитектурными бюро, что обеспечивает современный и эстетичный облик
            зданий. Внимание к деталям и комплексный подход в реализации
            проектов формируют высокий уровень комфорта. Каждый жилой комплекс
            от «Мангазеи Девелопмент» продуман до мелочей, имеет оптимально
            развитые социальную, спортивную и коммерческую инфраструктуры. Общая
            площадь проектов компании составляет 605,3 тыс. м2. В портфель
            «Мангазеи Девелопмент» входят четыре успешно сданных досрочно
            объекта: ЖК «Пикассо», ЖК «Марьина Роща», ЖК «Измайлово Lane», ЖК
            «ТЫ и Я». Сегодня девелопер реализует жилой комплекс бизнес-класса
            «Интонация» и разрабатывает несколько новых площадок. «Мангазея
            Девелопмент» входит в состав российской диверсифицированной группы
            компаний «Мангазея», которая ведет свою деятельность в пяти
            направлениях реального сектора экономики.
          </p>
        </div>
      </div>
      <div className={styles.buildings_container}>
        <div className={styles.buildings_img_container}>
          <img src={building1} alt="Здание" loading="lazy" />
        </div>
        <div className={styles.buildings_img_container}>
          <img src={building2} alt="Здание" loading="lazy" />
        </div>
        <div className={styles.buildings_img_container}>
          <img src={building3} alt="Здание" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
