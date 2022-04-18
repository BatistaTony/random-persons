import { useEffect, useState } from "react";
import { useGetUsers } from "../../hooks/useGetUsers";
import { Person } from "../../types/person";
import {
  RandomPersonsContainer,
  ButtonLoadMore,
  LisItem,
  LisItemPic,
  ListUsers,
  Title,
  LisItemName,
  LisItemButtonRemove,
  LoadingIndicator,
} from "./random-persons.styles";

const RandomPersons = () => {
  const [pageResults, setPageResults] = useState(10);
  const { data, error, isLoading } = useGetUsers({ users: pageResults });
  const [persons, setPersons] = useState<Person[]>([]);
  const [counter, setCounter] = useState(0);

  const getMoreResults = () => {
    setPageResults(counter + 10);
  };

  const removeUser = (id: string) => {
    const restData = persons.filter((user) => user.email !== id);
    setCounter(pageResults - (pageResults - (persons.length - 1)));
    setPersons(restData);
  };

  useEffect(() => {
    setPersons(data);
    setCounter(pageResults);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <RandomPersonsContainer>
      <Title>
        Random Users <span data-testid="counter-users">{counter}</span>
      </Title>

      {!!error && <p>{error}</p>}

      {!isLoading && persons.length === 0 && <p>There is no users load more</p>}

      {persons.length !== 0 && (
        <ListUsers data-testid="list-users">
          {persons.map((person, index) => (
            <LisItem key={person.email}>
              <p className="person-index" data-testid="index-user">
                {index + 1}
              </p>
              <LisItemPic src={person.picture.medium} alt="" />
              <LisItemName>{`${person.name.title} ${person.name.first} ${person.name.last}`}</LisItemName>

              <LisItemButtonRemove
                data-testid="remove-btn"
                onClick={() => removeUser(person.email)}
              >
                Remove
              </LisItemButtonRemove>
            </LisItem>
          ))}
        </ListUsers>
      )}

      {isLoading && (
        <LoadingIndicator data-testid="loading" className="loading">
          Loading users...
        </LoadingIndicator>
      )}

      <ButtonLoadMore data-testid="show-more" onClick={getMoreResults}>
        load more
      </ButtonLoadMore>
    </RandomPersonsContainer>
  );
};

export default RandomPersons;
