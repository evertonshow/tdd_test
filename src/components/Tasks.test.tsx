import { render, screen, fireEvent } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import Tasks from "./Tasks";

describe("Tasks Component", () => {
  // aqui api que busca os dados deve ser a mesma que vc faz a busca
  const worker = setupServer(
    rest.get(
      "https://jsonplaceholder.typicode.com/todos",
      async (req, res, ctx) => {
        return res(
          ctx.json([
            {
              userId: 1,
              id: 1,
              title: "delectus aut autem",
              completed: false,
            },
          ])
        );
      }
    )
  );

  // aqui pra iniciar a busca de dados sempre antes do teste
  beforeAll(() => {
    worker.listen();
  });
  beforeEach(() => {
    worker.resetHandlers();
  });

  // verificando se os dados da api estão vindo e certos
  it("should fetch and show tasks on buton click", async () => {
    render(<Tasks />);

    const button = screen.getByText(/get tasks from api/i);

    fireEvent.click(button);

    await screen.findByText("delectus aut autem");
  });

  // verificando se dá erro na api e message de erro
  it("should show error message on fetching tasks", async () => {
    worker.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/todos",
        async (req, res, ctx) => {
          return res(ctx.status(500), ctx.json({ message: "error happened" }));
        }
      )
    );

    render(<Tasks />);
    const button = screen.getByText(/get tasks from api/i);

    fireEvent.click(button);

    await screen.findByText("Request failed with status code 500");
  });
});

export default {};
