import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

const sum = (num1: number, num2: number) => {
  return num1 + num2;
};

describe("App Component", () => {
  it("should sum correctly", () => {
    expect(sum(2, 6)).toBeGreaterThan(0);
  });
  // aqui procurador a palavra Hello World!
  it("should render App with hello message", () => {
    render(<App />);

    screen.getByText("Hello world!");
  });

  // aqui mudando palavra e verificando se ela existe ainda
  it("should change message on button click", () => {
    render(<App />);

    screen.getByText("Let's learn more about testing in React");

    // pode usar expressão regular
    const button = screen.getByText(/change message/i);

    fireEvent.click(button);
    screen.getByText(/new Message/i);

    // aqui verificando se existe a palavra ainda a opção query busca se não tiver não dá erro
    const oldMessage = screen.queryByText(
      "Let's learn more about testing in React"
    );

    // a expressão not nega se for true vira false, verifico se existe no documento ainda essa frase
    expect(oldMessage).not.toBeInTheDocument();
  });
});

export default {};
