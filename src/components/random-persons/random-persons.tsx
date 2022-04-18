import { useEffect, useState, useCallback } from "react";
import { getPersons } from "../../services/persons";
import { Person } from "../../types/person";
import {
  RandomPersonsContainer,
  ButtonLoadMore,
  LisItem,
  LisItemPic,
  ListUsers,
  Title,
  LisItemName,
} from "./random-persons.styles";

const LOADING_TIME = 2000;

const RandomPersons = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [pageResults, setPageResults] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  const getMoreResults = () => {
    setPageResults(pageResults + 10);
  };

  const loadData = async () => {
    const data = await getPersons({
      items: pageResults,
    });
    setPersons(data.results);
  };

  // useEffect(() => {
  //   loadData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [pageResults]);

  useEffect(() => {
    loadData();
  }, [pageResults]);

  return (
    <RandomPersonsContainer>
      <Title>Random Users</Title>

      {persons.length !== 0 && (
        <ListUsers>
          {persons.map((person, index) => (
            <LisItem key={person.email}>
              <p>{index + 1}</p>
              <LisItemPic src={person.picture.medium} alt="" />
              <LisItemName>{`${person.name.title} ${person.name.first} ${person.name.last}`}</LisItemName>
            </LisItem>
          ))}
        </ListUsers>
      )}
      <ButtonLoadMore onClick={getMoreResults}>load more</ButtonLoadMore>
    </RandomPersonsContainer>
  );
};

export default RandomPersons;
