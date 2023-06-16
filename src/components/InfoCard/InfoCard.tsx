import styles from './InfoCard.module.scss';

const InfoCard: React.FC = ({ img, right, title, text }: any) => (
  <div className={` ${right !== true ? styles.root : styles.rootReverse} `}>
    <img src={img} alt="Картинка" loading="lazy" />

    <div className={styles.textContainer}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  </div>
);

export default InfoCard;
