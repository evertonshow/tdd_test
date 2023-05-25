import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  it("Should render with red background if disabled", () => {
    render(
      <Button disabled onClick={() => {}}>
        Click me
      </Button>
    );

    const button = screen.getByRole("button", { name: /ClIck Me/i });
    expect(button).toHaveStyle({ background: "red" });
  });

  it("should call onClick prop on Click", () => {
    const onClick = jest.fn();

    render(
      <Button disabled onClick={onClick}>
        click me
      </Button>
    );

    const button = screen.getByText("click me");

    fireEvent.click(button);

    // aqui verificar a função foi executada
    expect(onClick).toHaveBeenCalled();

    // aqui verifica a função executado passando o parametro
    // expect(onClick).toHaveBeenCalledWith(10);
  });
});
