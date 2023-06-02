import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, editContact} from 'redux/contactsSlice';

import { BtnDelete, BtnEdit, BtnWrapper, EditWrapper, ItemCard, ListItem } from 'components/ContactList/ContactList.styled';
import Notiflix from 'notiflix';
import { useState } from 'react';
import { updateValue } from 'redux/editSlice';




export default function ContactListItem({ contact }) {
  const { id, name } = contact;

  const [isEdit, setIsEdit] = useState(false)
  const nick = useSelector(state => state.edit.nick)
  const phone = useSelector(state => state.edit.phone)

  const dispatch = useDispatch();


  const handleEdit = () => {
    setIsEdit(prev => !prev )
 
    if (isEdit) {
      const updatedContact = {
        id,
        name: nick,
        number: phone,
      };
      window.confirm(`Are you sure you want to update ${name}?`) 
      dispatch(editContact(updatedContact));
      Notiflix.Notify.success(`Contact ${name} updated.`);
    }

    
  };

  const handleDelete = () => {

    const shouldDelete = window.confirm(`Are you sure you want to delete ${name}?`);

    if (shouldDelete) {
      dispatch(deleteContact(id))
      Notiflix.Notify.warning(`${name} deleted.`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateValue({ field: name, value }));
  };

//   const handleChange =(e) =>{

//     const{name, value} =e.currentTarget
//     switch (name) {
//         case 'nick':
//             setNick(value)
//             break;
//         case 'phone':
//             setPhone(value)
//             break;
    
//         default:
//             break;
//     }
// }


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