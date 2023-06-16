import styles from './ContactCard.module.scss';

const ContactCard: React.FC = ({ title, name, email, number }: any) => (
  <div className={styles.root}>
    <p>{title}</p>
    <p>{name}</p>
    <p>{email}</p>
    <p>{number}</p>
  </div>
);

export default ContactCard;
