import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1> Repository List</h1>

      <ul>
        <RepositoryItem
          repository={{
            name: " Repo 1",
            description: "First Repo from the list",
            link: "https://github.com",
          }}
        />
        <RepositoryItem
          repository={{
            name: " Repo 2",
            description: "Second Repo from the list",
            link: "https://github.com",
          }}
        />
        <RepositoryItem
          repository={{
            name: " Repo 3",
            description: "Third Repo from the list",
            link: "https://github.com",
          }}
        />
      </ul>
    </section>
  );
}
