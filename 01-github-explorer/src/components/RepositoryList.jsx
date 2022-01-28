import { RepositoryItem } from "./RepositoryItem";

const repositoryMock = {
  name: "unform",
  description: "Unform Repository",
  link: "https://github.com/unform/unform",
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1> Repository List</h1>

      <ul>
        <RepositoryItem repository={repositoryMock} />
        <RepositoryItem repository={repositoryMock} />
        <RepositoryItem repository={repositoryMock} />
      </ul>
    </section>
  );
}
