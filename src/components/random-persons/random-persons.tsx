import { useState } from "react";
import { useGetUsers } from "../../hooks/useGetUsers";
import {
  RandomPersonsContainer,
  ButtonLoadMore,
  LisItem,
  LisItemPic,
  ListUsers,
  Title,
  LisItemName,
} from "./random-persons.styles";

const RandomPersons = () => {
  const [pageResults, setPageResults] = useState(10);
  const { data, error, isLoading } = useGetUsers({ users: pageResults });

  const getMoreResults = () => {
    setPageResults(pageResults + 10);
  };

  return (
    <RandomPersonsContainer>
      <Title>
        Random Users <span data-testid="counter-users">{pageResults}</span>
      </Title>

      {!!error && <p>{error}</p>}

      {data.length !== 0 && (
        <ListUsers data-testid="list-users">
          {data.map((person, index) => (
            <LisItem key={person.email}>
              <p className="person-index" data-testid="index-user">
                {index + 1}
              </p>
              <LisItemPic src={person.picture.medium} alt="" />
              <LisItemName>{`${person.name.title} ${person.name.first} ${person.name.last}`}</LisItemName>
            </LisItem>
          ))}
        </ListUsers>
      )}

      {isLoading && <p data-testid="loading">Loading users...</p>}

      <ButtonLoadMore data-testid="show-more" onClick={getMoreResults}>
        load more
      </ButtonLoadMore>
    </RandomPersonsContainer>
  );
};

export default RandomPersons;
