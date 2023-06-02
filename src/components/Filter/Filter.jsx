import { Input } from '../ContactForm/ContactForm.styled';
// import { PropTypes } from 'prop-types';
import { FilterLabel } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

export const Filter = ({ value, onFilterChange, dis }) => {
  const dispatch = useDispatch()

 

  return(
    <>
    <FilterLabel>
      {dis 
      ? 'List is empty . . .'
      : 'Find contacts by name'}
      <Input
        className='filter__field'
        type="text"
        // value={value}
        onChange={(e) => dispatch(filterContacts(e.target.value))}
        // disabled={dis}
 
      />
    </FilterLabel>
  </>

  )

}

// Filter.propTypes = {
//   value: PropTypes.string,
//   onFilterChange: PropTypes.func,
// };
