import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import BPM from "./BPM";

afterEach(cleanup);

it("initializes tempo when given prop", () => {
	const { getByText } = render(<BPM bpmInitial={88} />);
	expect(getByText("88")).toBeInTheDocument();
});

it("initializes tempo without initial prop", () => {
	const { getByText } = render(<BPM />);
	expect(getByText("88")).toBeInTheDocument();
});

it("increases tempo by 4 when + button is clicked", () => {
	const bpmInitial = 100;
	const bpmAfter = "104";
	const { getByRole, getByText } = render(<BPM bpmInitial={bpmInitial} />);

	fireEvent.click(getByRole("button", { name: "increase-4-bpm" }));
	expect(getByText(bpmAfter)).toBeInTheDocument();
});

it("decreases tempo by 4 when - button is clicked", () => {
	const bpmInitial = 100;
	const bpmAfter = "96";
	const { getByRole, getByText } = render(<BPM bpmInitial={bpmInitial} />);

	fireEvent.click(getByRole("button", { name: "decrease-4-bpm" }));
	expect(getByText(bpmAfter)).toBeInTheDocument();
});

it("stays below maxBPM", () => {
	const bpmInitial = 239;
	const bpmAfter = "240";
	const { getByRole, getByText } = render(<BPM bpmInitial={bpmInitial} />);

	fireEvent.click(getByRole("button", { name: "increase-4-bpm" }));
	expect(getByText(bpmAfter)).toBeInTheDocument();
});

it("stays above minBPM", () => {
	const bpmInitial = 41;
	const bpmAfter = "40";
	const { getByRole, getByText } = render(<BPM bpmInitial={bpmInitial} />);

	fireEvent.click(getByRole("button", { name: "decrease-4-bpm" }));
	expect(getByText(bpmAfter)).toBeInTheDocument();
});
