import { FilterEl } from 'components/Filter/filter.styled'

export const Filter = ({ value, onChange }) => {
  return (
    <label>
      <FilterEl>Find contacts by name</FilterEl>
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};