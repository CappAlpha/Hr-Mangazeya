import styles from './ContactsSection.module.scss';
import { contact } from '../../static/db';
import ContactCard from '../ContactCard/ContactCard';

const ContactsSection: React.FC = () => (
  <section className={styles.root}>
    <h2>Контакты сотрудников</h2>
    <div className={styles.card}>
      <p>Должность</p>
      <p>Имя</p>
      <p>Email</p>
      <p>Доб. номер</p>
    </div>
    {contact.map((card: object, index) => (
      <ContactCard key={index} {...card} />
    ))}
  </section>
);

export default ContactsSection;
