import styles from './ContactCard.module.scss';

const ContactCard: React.FC = ({ title, name, email, number }: any) => (
  <div className={styles.root}>
    <p>{title}</p>
    <p>{name}</p>
    <a href={`mailto:${email}`}>{email}</a>
    <p>{number}</p>
  </div>
);

export default ContactCard;
