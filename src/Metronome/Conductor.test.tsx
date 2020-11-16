import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Conductor from "./Conductor";

afterEach(cleanup);

it("adds a beat", () => {
	const { getByRole } = render(<Conductor />);

	fireEvent.click(getByRole("button", { name: "add-beat" }));
});
