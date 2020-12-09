import React from "react";
import { render, cleanup } from "@testing-library/react";
import InputRange from "./InputRange";

afterEach(cleanup);

it("renders a slider with accesible role", () => {
	const { getByRole } = render(<InputRange ariaLabelForHandle="slider" />);
	expect(getByRole("slider", { name: "slider" })).toBeInTheDocument();
});
