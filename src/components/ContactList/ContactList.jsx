// import { PropTypes } from 'prop-types';

import { List,  ContactContainer } from './ContactList.styled';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';


export const ContactList = ({  onDeleteContact, onEditContact}) => {

  const contacts = useSelector(state => state.contacts)
  const filterValue = useSelector(state => state.filter)
// console.log(filterValue);
  // const result = contacts.filter(
  //   (contact) =>
     
  //     contact.number.toString().includes(filterValue)
  // );

  const result = [...contacts.filter(contact=>contact.name.toLowerCase().includes(filterValue.filter))]


  return (
    contacts.length !== 0 && (
      <ContactContainer>
        <List>
          {result.map((contact) => {
           

            return (
            <ContactListItem 
            key={contact.id}
            contact = {contact}
          //  deleteContact = {onDeleteContact}
          //  onEditContact ={onEditContact}
            ></ContactListItem>
            );
          })}
        </List>
      </ContactContainer>
    )
  );
};

// ContactList.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.object),
//   onDeleteContact: PropTypes.func,
//   onEditContact: PropTypes.func,
// };
