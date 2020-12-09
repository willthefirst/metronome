import React from "react";
import layout from "../styles/layout.module.scss";

type RowProps = {
    height?: number;
    children: any;
};

function Row({ height, children }: RowProps) {
	return (
		<div className={layout.row} style={{flexGrow: height || 1}}>
            {children}
		</div>
	);
}

export default Row;