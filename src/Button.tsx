import React from "react";

type ButtonProps = {
    className: "string",
    children: any
};

function Button({ className, children }: ButtonProps) {
	return (
		<button>
            {children}
        </button>
	);
}

export default Button;
