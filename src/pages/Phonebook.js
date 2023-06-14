import { Container } from '../components/container/Container';
import { Section } from "../components/section/Section";
import  ContactForm  from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import ListBar from 'components/ListBar/ListBar';
import {  useSelector } from 'react-redux';
import { iconMphone,  iconGypsy } from 'utils/svgIcons';
import { getContactsList } from 'redux/selectors';


export const Phonebook = () => {
    const contacts = useSelector(getContactsList)
  
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
  )
}

