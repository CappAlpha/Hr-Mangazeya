import styles from './InfoSection.module.scss';
import { info } from '../../static/db';
import InfoCard from '../InfoCard/InfoCard';

const InfoSection: React.FC = () => {
  return (
    <section className={styles.root}>
      {info.map((card: object, index) => (
        <InfoCard key={index} {...card} />
      ))}
    </section>
  );
};

export default InfoSection;
