import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import PlayButton from "./PlayButton";

afterEach(cleanup);

it("toggles 'start' and 'stop' text when clicked", () => {
	const { getByRole, getByText } = render(<PlayButton />);

	fireEvent.click(getByRole("button", { name: "start-stop" }));
	expect(getByText("Stop")).toBeInTheDocument();

	fireEvent.click(getByRole("button", { name: "start-stop" }));
	expect(getByText("Start")).toBeInTheDocument();
});
