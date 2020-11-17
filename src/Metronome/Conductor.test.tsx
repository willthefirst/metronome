import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Conductor from "./Conductor";

afterEach(cleanup);

it("adds a beat", () => {
	const { getByRole, getAllByRole } = render(<Conductor />);

	fireEvent.click(getByRole("button", { name: "add-beat" }));
	expect(getAllByRole('slider', { name: "beat-slider" })).toHaveLength(5);
});

it("removes a beat", () => {
	const { getByRole, getAllByRole } = render(<Conductor />);

	fireEvent.click(getByRole("button", { name: "remove-beat" }));
	expect(getAllByRole('slider', { name: "beat-slider" })).toHaveLength(3);
});
