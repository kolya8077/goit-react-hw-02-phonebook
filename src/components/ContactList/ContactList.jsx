import { Ul, Span, Item } from 'components/ContactList/contactList.styled';

export const ContactList = ({ events, onDeliteItem }) => {
  return (
    <Ul>
      {events.map(({ name, number, id }) => (
        <Item key={id}>
          <Span>
            {name}: {number}
          </Span>
          <button type="button" onClick={() => onDeliteItem(id)}>
            delete
          </button>
        </Item>
      ))}
    </Ul>
  );
};
