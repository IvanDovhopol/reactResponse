import { Material } from 'Components/Arhive/Material';

export const MaterialList = ({ items, ...otherProps }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <Material item={item} {...otherProps} />
        <hr />
      </li>
    ))}
  </ul>
);

