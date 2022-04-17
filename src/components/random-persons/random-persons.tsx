import { useEffect, useState, useCallback } from "react";
import { getPersons } from "../../services/persons";
import { Person } from "../../types/person";

const LOADING_TIME = 2000;

const RandomPersons = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [pageResults, setPageResults] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  const getMoreResults = () => {
    setPageResults(pageResults + 10);
  };

  const loadData = useCallback(async () => {
    const data = await getPersons({
      items: pageResults,
    });

    console.log(data.results);

    setPersons(data.results);
  }, [pageResults]);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageResults]);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      RandomPersons {pageResults}
      {persons.length !== 0 && (
        <div>
          {persons.map((person) => (
            <li key={person.id.value}>{person.name.first}</li>
          ))}
        </div>
      )}
      <button onClick={getMoreResults}>load more</button>
    </div>
  );
};

export default RandomPersons;
