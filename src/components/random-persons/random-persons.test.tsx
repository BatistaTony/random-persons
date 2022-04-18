import { fireEvent, render, waitFor } from "@testing-library/react";
import RandomPersons from "./random-persons";
import { rest } from "msw";
import mockData from "./../../helpers/mockData.json";
import { setupServer } from "msw/node";

// eslint-disable-next-line import/first
// import axiosMock from "axios";
// jest.mock("axios");

const URL = "https://randomuser.me/api/";

const handlers = [
  rest.get(URL, (req, res, ctx) => {
    req.params = {
      results: "10",
    };
    return res(ctx.status(200), ctx.json(mockData));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("Random Persons", () => {
  it("Should render correctly", () => {
    render(<RandomPersons />);
  });

  it("Should load users at list-users container", async () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const screen = render(<RandomPersons />);

    await waitFor(() => {
      expect(screen.getAllByTestId("list-users")).toBeTruthy();
    });
  });

  it("should show more 10 users when click on the button show more", async () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const screen = render(<RandomPersons />);

    const button = screen.getAllByTestId("show-more");
    let counterDefault = 0;

    const showMore = () => {
      fireEvent.click(button[0]);
      counterDefault = counterDefault + 10;
    };

    showMore();

    await waitFor(() => {
      const counter = screen.getAllByTestId("counter-users")[0];
      expect(counter).toHaveTextContent(`${counterDefault}`);
    });

    showMore();

    await waitFor(() => {
      const counter = screen.getAllByTestId("counter-users")[0];
      expect(counter).toHaveTextContent(`${counterDefault}`);
    });
  });

  it("Should say is loading users when click at button show-more", async () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const screen = render(<RandomPersons />);

    const button = screen.getAllByTestId("show-more");

    fireEvent.click(button[0]);

    await waitFor(() => {
      expect(screen.getAllByTestId("loading")[0]).toHaveTextContent(
        "Loading users..."
      );
    });
  });
});
