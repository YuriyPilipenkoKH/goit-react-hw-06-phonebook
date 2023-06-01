import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, updateContact} from 'redux/contactsSlice';
import { toggleEdit, updateValue } from 'redux/editSlice';
import { BtnDelete, BtnEdit, BtnWrapper, EditWrapper, ItemCard, ListItem } from 'components/ContactList/ContactList.styled';

export default function ContactListItem({ contact }) {
  const { id, name, number } = contact;
  const isEdit = useSelector(state => state.edit.isEdit )
  const nick = useSelector(state => state.edit.nick)
  const phone = useSelector(state => state.edit.phone)


  const dispatch = useDispatch();

  const editContact = () => {
    dispatch(toggleEdit())
    if (isEdit) {
      console.log('go');
      const updatedContact = {
        id,
        name,
        number,
      };
      window.confirm(`Are you sure you want to update ${name}?`);
      dispatch(updateContact(updatedContact));
    } else {
      // dispatch(toggleEdit({ id }));
    }
  };

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  const handleChnge = (e) => {
    const { name, value } = e.currentTarget;
    const updatedContact = {
      id,
      name,
      number,
      [name]: value,
    };
    dispatch(updateContact(updatedContact));
  };

  return (
    <ListItem totalItems={4}>
      {isEdit ? (
        <EditWrapper className="edit-wrapper">
          <input type="text" name="name" value={name} onChange={(e) => dispatch(updateValue(e.target.value))} />
          <input type="text" name="number" value={number} onChange={handleChnge} />
        </EditWrapper>
      ) : (
        <ItemCard className="cardSpan">
          {contact.name}: {contact.number}
        </ItemCard>
      )}

      <BtnWrapper className="button-wrapper">
        <BtnEdit type="button" onClick={editContact}>
          {isEdit ? 'Save' : 'Edit'}
        </BtnEdit>

        <BtnDelete type="button" onClick={handleDelete}>
          Delete
        </BtnDelete>
      </BtnWrapper>
    </ListItem>
  );
}