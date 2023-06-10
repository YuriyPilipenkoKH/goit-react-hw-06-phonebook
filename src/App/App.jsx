import { Container } from '../components/container/Container';
import { Section } from "../components/section/Section";
import  ContactForm  from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import ListBar from 'components/ListBar/ListBar';
import {  useDispatch, useSelector } from 'react-redux';
import { iconMphone,  iconGypsy } from 'utils/svgIcons';
import { useEffect } from 'react';
import { getContactsList } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';



const App = () => {

  const dispatch = useDispatch()
  const contacts = useSelector(getContactsList)
  
  useEffect(() => {
    dispatch(fetchContacts())
  
  }, [dispatch] )
  
  
  return (
  
    <Container>
      <Section title="Phonebook" icon ={iconMphone}>
        <ContactForm  />
      </Section>

      <Section title="Contacts" icon = {iconGypsy}>
        <Filter />
        <ListBar></ListBar>
        {contacts.length > 0 && (
          <ContactList  />
        )}
      </Section>
    </Container>

  );
};

export default App;
