import { Container } from '../components/container/Container';
import { Section } from "../components/section/Section";
import  ContactForm  from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import {  useSelector } from 'react-redux';
import { iconMphone, iconActor } from 'utils/svgIcons';



const App = () => {
  const contacts = useSelector(state => {
    return state.contacts})

  
  return (
  
    <Container>
      <Section title="Phonebook" icon ={iconMphone}>
        <ContactForm  />
      </Section>

      <Section title="Contacts" icon = {iconActor}>
        <Filter />
        {contacts.contactsList.length > 0 && (
          <ContactList  />
        )}
      </Section>
    </Container>

  );
};

export default App;
