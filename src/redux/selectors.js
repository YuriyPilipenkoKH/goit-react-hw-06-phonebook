export const getContactsList = state => state.contacts.contactsList
export const getContactsFilter = state => state.filter
export const getForm =  state => state.form
export const getEditedName =  state => state.edit.nick
export const getEditedPhone =  state => state.edit.phone
export const getSorted =  state => state.sort



export const getSortedById = (contactsList, bool)  => { 
    return bool 
    ? [...contactsList].sort((a, b) => parseInt(a.id) - parseInt(b.id))
    : [...contactsList].sort((b, a) => parseInt(a.id) - parseInt(b.id)) 
  } 

export const getSortedByDate = (contactsList, bool)  => {
    return bool 
    ? [...contactsList].sort((a, b) => a.createdAt.localeCompare(b.createdAt))
    : [...contactsList].sort((b, a) => a.createdAt.localeCompare(b.createdAt))
  } 

export const getSortedByName = (contactsList, bool)  => {
    return bool 
    ? [...contactsList].sort((a, b) => a.name.localeCompare(b.name))
    : [...contactsList].sort((b, a) => a.name.localeCompare(b.name))
  } 

  export const getSortedByNumber = (contactsList, bool)  => {
  return bool 
    ? [...contactsList].sort((a, b) => a.number.localeCompare(b.number))
    : [...contactsList].sort((b, a) => a.number.localeCompare(b.number))
} 

export const arrayOfMethods = [getSortedById, getSortedByDate, getSortedByName, getSortedByNumber]
