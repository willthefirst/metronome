import * as React from "react";
import Beat from './Beat';

type ConductorProps = {
	className?: string;
};

function Conductor({ className }: ConductorProps) {
	return (
		<div className={className}>
            <Beat className="active"/>
            <Beat />
            <Beat />
            <Beat />
		</div>
	);
}

export default Conductor;
