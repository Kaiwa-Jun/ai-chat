import { render } from "@testing-library/react";
import Home from "./page";

describe("Homeページのテスト", () => {
  it("スナップショットが一致すること", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
