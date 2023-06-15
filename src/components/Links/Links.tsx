import styles from './Links.module.scss';
import { vk, telegram, youtube } from '../../assets';

const Links: React.FC = () => {
  return (
    <section className={styles.links_section}>
      <div className={styles.h3_container}>
        <h3>Ссылки на наши официальные социальные сети, присоединяйтесь:</h3>
      </div>

      <div className={styles.container_links}>
        <div className={styles.container_link}>
          <a href="https://vk.com/mangazeya_development" target="blank">
            <img src={vk} alt="ВК" />
            <p>ВК ГК Мангазея</p>
          </a>
        </div>

        <div className={styles.container_link}>
          <a href="https://t.me/gk_mangazeya" target="blank">
            <img src={telegram} alt="Телеграм ГК Мангазея" />
            <p>Телеграм канал ГК Мангазея</p>
          </a>
        </div>

        <div className={styles.container_link}>
          <a href="https://t.me/+6PYvy0FJsuJjMDAy" target="blank">
            <img src={telegram} alt="Телеграм MNGZ TEAM" />
            <p>Телеграм канал MNGZ TEAM</p>
          </a>
        </div>

        <div className={styles.container_link}>
          <a
            href="https://www.youtube.com/channel/UCeYGWggXwV70gwpTKhslJFQ/videos"
            target="blank"
          >
            <img src={youtube} alt="YouTube" />
            <p>Youtube канал Мангазея</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Links;
