import { render } from "@testing-library/react";
import RandomPersons from "./random-persons";

describe("Random Persons", () => {
  it("Should render correctly", () => {
    render(<RandomPersons />);
  });
});
