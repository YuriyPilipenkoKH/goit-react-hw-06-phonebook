// import { PropTypes } from 'prop-types';

import { Input, Form, Label, ContactFormBtn } from './ContactForm.styled';
import { iconReactHook } from 'utils/svgIcons';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';
import { updateField, resetForm } from 'redux/formSlice';
import Notiflix from 'notiflix';



const ContactForm = ({ onSubmit }) => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  const contacts = useSelector(state =>  state.contacts)
  const { name, number } = useSelector((state) => state.form);
  const dispatch = useDispatch()


  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name, value }));
  };


  const handleSubmit = (e) => {
  
    e.preventDefault();
    const {name, number} = e.target
    const newContact  = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    }
    console.log(newContact)
    if (contacts.find((contact) => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      Notiflix.Notify.failure(`${name.value} is already in contacts.`);
      return;
    } else if (contacts.find((contact) => contact.number.toString() === number.value)) {
      Notiflix.Notify.failure(`${number.value} is already in contacts.`);
      return;
    }

    dispatch(addContact(newContact))
    dispatch(resetForm()); // Reset the form after submission
  };


  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          required
          onChange={handleChange}
        />
      </Label>
      <Label>
        Number:
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          required
          onChange={handleChange}
        />
      </Label>
      <ContactFormBtn 
      type="submit"
    
     
      >Add contact{ iconReactHook }</ContactFormBtn>
    </Form>
  );
};

export default ContactForm;

//   ContactForm.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//     onChange: PropTypes.func,
// }