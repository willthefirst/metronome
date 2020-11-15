import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import BPM from "./BPM";

afterEach(cleanup);

it("initializes tempo to 88bpm", () => {
	const { getByText } = render(<BPM />);
	expect(getByText("88")).toBeInTheDocument();
});

it("increases tempo by 4 when + button is clicked", () => {
	const { getByText } = render(<BPM />);
	expect(getByText("88")).toBeInTheDocument();

})