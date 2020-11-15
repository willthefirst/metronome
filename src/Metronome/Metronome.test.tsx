import React from "react";
import { render, cleanup } from "@testing-library/react";
import Metronome from ".";

afterEach(cleanup);

it("should take a snapshot of the whole app", () => {
	const { asFragment } = render(<Metronome />);
	expect(asFragment(<Metronome />)).toMatchSnapshot();
});
