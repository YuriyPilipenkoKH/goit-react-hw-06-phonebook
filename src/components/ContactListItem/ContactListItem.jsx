import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, editContact} from 'redux/contactsSlice';
import { BtnDelete, BtnEdit, BtnWrapper, EditWrapper, ItemCard, ListItem } from 'components/ContactList/ContactList.styled';
import { useState } from 'react';
import { confirmDelete, confirmUpdate } from 'utils/notifier';
import { useSelector } from 'react-redux';
import Notiflix from 'notiflix';



export default function ContactListItem({ contact }) {
  const { id, name, number } = contact;

  const [isEdit, setIsEdit] = useState(false)
  // const nick = useSelector(state => state.edit.nick)
  // const phone = useSelector(state => state.edit.phone)
  const [nick, setNick] = useState(name)
  const [phone, setPhone] = useState(number)
  const dispatch = useDispatch();

  const contactsList  = useSelector(state => state.contacts.contactsList )
 console.log(contactsList);

  const handleEdit = () => {
    setIsEdit(prev => !prev )
 
    if (isEdit) {
      const updatedContact = {
        id,
        name: nick,
        number: phone,
      };

console.log('updatedContact' , updatedContact );
const contactToUpdate  = contactsList.find(contact => contact.id === updatedContact.id)
console.log('contactToUpdate',contactToUpdate)

const allExeptUpdated = contactsList.filter(contact => contact.id !== contactToUpdate.id)
console.log('allExeptUpdated',allExeptUpdated)

if (allExeptUpdated.find((contact) => contact.name.toLowerCase() === updatedContact.name.toLowerCase())){
  Notiflix.Notify.failure(`${updatedContact.name} is already in contacts.`);
return ;
}

else if (allExeptUpdated.find((contact) => contact.number.toString() === updatedContact.number)) {
  Notiflix.Notify.failure(`${updatedContact.number} is already in contacts.`);
return ;
}


confirmUpdate(`Are you sure you want to update ${name}?`, name)
  .then(() => {
    dispatch(editContact(updatedContact));
  })
  .catch(() => {
    // Handle cancellation or rejection
  });

    }
  };

  const handleDelete = () => {

    confirmDelete(`Are you sure you want to delete ${name}?`, name)
  .then(() => {
    dispatch(deleteContact(id))
  })
  .catch(() => {
    // Handle cancellation or rejection
  });

  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   dispatch(updateValue({ field: name, value }));
  // };

  const handleChange =(e) =>{

    const{name, value} =e.currentTarget
    switch (name) {
        case 'nick':
            setNick(value)
            break;
        case 'phone':
            setPhone(value)
            break;
    
        default:
            break;
    }
}


  return (
    <ListItem totalItems={4}>
      {isEdit ? (
        <EditWrapper className="edit-wrapper">
          <input type="text" name="nick" value={nick} onChange={handleChange} />
          <input type="text" name="phone" value={phone} onChange={handleChange} />
        </EditWrapper>
      ) : (
        <ItemCard className="cardSpan">
          {contact.name}: {contact.number}
        </ItemCard>
      )}

      <BtnWrapper className="button-wrapper">
        <BtnEdit type="button" onClick={handleEdit}>
        {isEdit  ? 'Save' : 'Edit'}
        </BtnEdit>

        <BtnDelete type="button" onClick={handleDelete}>
          Delete
        </BtnDelete>
      </BtnWrapper>
    </ListItem>
  );
}