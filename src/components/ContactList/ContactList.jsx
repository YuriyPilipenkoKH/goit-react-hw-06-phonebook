import { List,  ContactContainer } from './ContactList.styled';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';


export const ContactList = () => {

  const contacts = useSelector(state => state.contacts.contactsList)
  const filterValue = useSelector(state => state.filter)

  const filteredContacts = [...contacts.filter((contact )=>
     contact.name.toLowerCase().includes(filterValue.filter) ||
     contact.number.toString().includes(filterValue.filter))]


  return (
    contacts.length !== 0 && (
      <ContactContainer>
        <List>
          {filteredContacts.map((contact) => {
           

            return (
            <ContactListItem 
            key={contact.id}
            contact = {contact}

            ></ContactListItem>
            );
          })}
        </List>
      </ContactContainer>
    )
  );
};

