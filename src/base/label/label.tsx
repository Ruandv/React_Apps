import React, { useState } from "react"
import './label.css';

function LabelComponent(caption: string) {
    return (
        <label id='ntxLabel'>{caption} : </label>
    )
};

export default LabelComponent;
