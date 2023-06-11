import { List,  ContactContainer, EmptySpan } from './ContactList.styled';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { getContactsList , getContactsFilter, getSorted} from 'redux/selectors';
import { arrayOfMethods} from 'redux/selectors';


export const ContactList = () => {

  const contacts = useSelector(getContactsList)
  const filterValue = useSelector(getContactsFilter)
  const sorted  = useSelector(getSorted)
  const {id, date,  name, number}  = useSelector(getSorted)
  const arrayOfBools = [id, date, name, number]

  console.log(sorted )
  // console.log(arrayOfMethods[sorted.activeIndex]);
  // console.log(arrayOfBools[sorted.activeIndex])
 
  const sortedContacts = arrayOfMethods[sorted.activeIndex]


  const filteredContacts = [...sortedContacts(contacts, arrayOfBools[sorted.activeIndex]).filter((contact )=>
     contact.name.toLowerCase().includes(filterValue.filter) || contact.number.includes(filterValue.filter) )]


  return (
    filteredContacts.length !== 0 
    ?(
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
    :<ContactContainer>
      <EmptySpan>No match to this query
        </EmptySpan>
    </ContactContainer>
  );
};

