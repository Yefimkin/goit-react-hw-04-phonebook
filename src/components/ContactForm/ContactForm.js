import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css'

const ContactForm = ({ onSubmit }) => {
const [name, setName] = useState('');
const [number, setNumber] = useState('');

const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    e.currentTarget.reset(e);
    };
    
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label>
                Name
                       <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={e => setName(e.currentTarget.value)}
                        className={styles.input}
                    />
            </label>
            <label>
                Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={e => setNumber(e.currentTarget.value)}
                        className={styles.input}
                    />
            </label>
            <button type="submit" className={styles.button}>Add contact</button>
        </form>
    );
}

ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };

export default ContactForm;