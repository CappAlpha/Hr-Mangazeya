import styles from './Links.module.scss';
import { vk, telegram, youtube } from '../../assets';

const Links: React.FC = () => {
  return (
    <section className={styles.links}>
      <div className={styles.p__container}>
        <p>Ссылки на наши официальные социальные сети, присоединяйтесь:</p>
      </div>

      <div className={styles.container}>
        <div className={styles.container__links}>
          <a href="https://vk.com/mangazeya_development" target="blank">
            <img src={vk} />
          </a>
          <p>ВК ГК Мангазея</p>
        </div>

        <div className={styles.container__links}>
          <a href="https://t.me/gk_mangazeya" target="blank">
            <img src={telegram} />
          </a>
          <p>Телеграм канал ГК Мангазея</p>
        </div>

        <div className={styles.container__links}>
          <a href="https://t.me/+6PYvy0FJsuJjMDAy" target="blank">
            <img src={telegram} />
          </a>
          <p>Телеграм канал MNGZ TEAM</p>
        </div>

        <div className={styles.container__links}>
          <a
            href="https://www.youtube.com/channel/UCeYGWggXwV70gwpTKhslJFQ/videos"
            target="blank"
          >
            <img src={youtube} />
          </a>
          <p>Youtube канал Мангазея Девелопмент</p>
        </div>
      </div>
    </section>
  );
};

export default Links;
