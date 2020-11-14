import React from 'react';
import "../styles/input.scss";
import InputRange from "./InputRange";

function Conductor() {
	return (
        <div>
            <InputRange orientation="vertical"/>
            <InputRange orientation="vertical"/>
            <InputRange orientation="vertical"/>
            <InputRange orientation="vertical"/>
        </div>
    )
}

export default Conductor;
