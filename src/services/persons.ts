import { api } from "./api";
import { RandomUserData } from "../types/person";

interface getPersonsProps {
  items: number;
}

export const getPersons = async ({
  items,
}: getPersonsProps): Promise<RandomUserData> => {
  const resp = await api().get("", {
    params: {
      results: items,
    },
  });

  return resp.data;
};
