export function RepositoryItem(props) {
  var repository = props.repository;
  return (
    <li>
      <strong>{repository?.name}</strong>
      <p>{repository?.description}</p>
      <a href={repository?.link}>Go to Repository</a>
    </li>
  );
}