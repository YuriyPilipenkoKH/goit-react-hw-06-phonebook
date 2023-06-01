import { PropTypes } from 'prop-types';

import { Input, Form, Label, ContactFormBtn } from './ContactForm.styled';
import { iconReactHook } from 'utils/svgIcons';
import { useSelector, useDispatch } from 'react-redux';
import { addContact , updateContact} from 'redux/contactsSlice';
import { nanoid } from 'nanoid';



const ContactForm = ({ onSubmit }) => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  const name = useSelector(state => {
  console.log(state)
  return state.contacts.name} )
  const number= useSelector(state => state.contacts.number )
  const dispatch = useDispatch()


  // const handleChange = (e) => {
  //   const { name, value } = e.currentTarget;

  //   const updatedContact = {
  //     name,
  //     number,
  //     [name]: value,
  //   };
  //   // dispatch(updateContact(updatedContact));
  //   // if (name === 'name') {
  //   //   setName(value);
  //   // } else if (name === 'number') {
  //   //   setNumber(value);
  //   // }
  // };

  const handleSubmit = (e) => {
  
    e.preventDefault();
    const {name, number} = e.target
    const data  = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    }
    console.log(data)


    dispatch(addContact(data))
    // resetForm();
  };

  // const resetForm = () => {

  // };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          // value={name}
          required
          // onChange={handleChange}
        />
      </Label>
      <Label>
        Number:
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          // value={number}
          required
          // onChange={handleChange}
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