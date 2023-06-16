import styles from './InfoSection.module.scss';
import { info } from '../../static/db';

const InfoSection: React.FC = () => {
  return (
    <section className={styles.info_section}>
      {info.map((inf) => (
        <div
          className={` ${
            inf.right !== true ? styles.container : styles.container_reverse
          } `}
        >
          <img src={inf.img} alt="Картинка" loading="lazy" />

          <div className={styles.text_container}>
            <h3>{inf.title}</h3>
            <p>{inf.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default InfoSection;
