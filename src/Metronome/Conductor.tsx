import * as React from "react";
import "../styles/input.scss";
import InputRange from "./InputRange";

type ConductorProps = {
	className?: string;
};

function Conductor({ className }: ConductorProps) {
	return (
		<div className={className}>
			<InputRange orientation='vertical' />
			<InputRange orientation='vertical' />
			<InputRange orientation='vertical' />
			<InputRange orientation='vertical' />
		</div>
	);
}

export default Conductor;
