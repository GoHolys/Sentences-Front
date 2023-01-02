import { ListProps } from "./ListTypes";

const List = ({ results }: ListProps) => {
  return (
    <ul>
      {Array.isArray(results) &&
        results.map((result) => (
          <li
            key={result.id}
            dangerouslySetInnerHTML={{ __html: result.text }}
          ></li>
        ))}
    </ul>
  );
};

export default List;
