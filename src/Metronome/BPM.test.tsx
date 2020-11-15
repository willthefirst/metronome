import React from "react";
import { render, cleanup } from "@testing-library/react";
import BPM from "./BPM";

afterEach(cleanup);

it("shows an input range", () => {
	const { getByText } = render(<BPM />);
	expect(getByText("88")).toBeInTheDocument();
});
