import axios from 'axios';

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

export const Articlelist = ({ items }) => {
  console.log(items);
  return (
    <ul>
      {items.map(({ objectID, url, title, author, points }) => (
        <li key={objectID}>
          Author: {author}({points})
          <br />
          <a href={url} target="_blank" rel="noreferrer noopener">
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
};
