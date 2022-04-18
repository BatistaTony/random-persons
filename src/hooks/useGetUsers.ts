import { useEffect, useState } from "react";
import { getPersons } from "../services/persons";
import { Person } from "../types/person";

interface useGetUsersProps {
  users: number;
}

export const useGetUsers = ({ users }: useGetUsersProps) => {
  const [data, setData] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const loadData = async () => {
    try {
      const data = await getPersons({
        items: users,
      });

      if (data.results) {
        setData(data.results);
      }

      setData(data.results);
    } catch (error) {
      console.log(error);
      setError("something went wrong");
    }
  };

  useEffect(() => {
    setIsLoading(true);
    loadData()
      .finally(() => {
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [users]);

  return {
    data,
    isLoading,
    error,
  };
};
