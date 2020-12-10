import React from "react";
import { render, cleanup } from "@testing-library/react";
import BPM from "./BPM";

afterEach(cleanup);

it("initializes tempo from prop", () => {
	const { getByText } = render(<BPM value={88} min={40} max={80} handleChange={()=>{}} />);
	expect(getByText("88 bpm")).toBeInTheDocument();
});