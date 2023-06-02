
import { Container } from '../components/container/Container';
import { Section } from "../components/section/Section";
import  ContactForm  from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import {  useSelector } from 'react-redux';



const App = () => {
  const contacts = useSelector(state => {
    console.log(state)
    return state.contacts})
  const filter = useSelector(state => state.filter)
  // const isChecked = useSelector(state => state.contacts.contacts)

  // const [filter, setFilter] = useState('');
  // const [isChecked, setIsChecked] = useState(null)
  // const dispatch = useDispatch();







  // const handleFilterChange = (e) => {

  //   // setFilter(e.currentTarget.value);
  //   dispatch(filterContacts())
  // };

 

  // const handleEditcontact = (updatedContact) => {
  //   console.log(updatedContact);
  //   const {id, name, number} = updatedContact

  //   const previousContact = contacts.filter(contact => contact.id === id)
  //   console.log('previousContact' ,previousContact);

  //   const allExeptUpdated = contacts.filter(contact => contact.id !== id)
  //   console.log('allExeptUpdated', allExeptUpdated);

  //   if (allExeptUpdated.find((contact) => contact.name.toLowerCase() === name.toLowerCase())) {
  //     Notiflix.Notify.failure(`${name} is already in contacts.`);
  //     // setContacts([...contacts] )
  //     // setIsChecked(false)
  //     return;

  //   } else if (allExeptUpdated.find((contact) => contact.number.toString() === number)) {
  //     Notiflix.Notify.failure(`${number} is already in contacts.`);
  //     // setIsChecked(false)
  //     return;
  //   }
  //   // setIsChecked(true)

  //   // setContacts([updatedContact, ...allExeptUpdated] )

  //   Notiflix.Notify.success(`${previousContact[0].name} updated.`);

  // }


  return (
  
    <Container>
      <Section title="Phonebook">
        <ContactForm  />
      </Section>

      <Section title="Contacts">
        <Filter value={filter}
        // dis={contacts.length === 0}
         />
        {contacts.length > 0 && (
          <ContactList 
          //  onItemStateUpdate ={isChecked}
           />
        )}
      </Section>
    </Container>

  );
};

export default App;
