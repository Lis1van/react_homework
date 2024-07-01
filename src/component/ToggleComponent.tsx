import React, {FC} from 'react';
// import {Simulate} from "react-dom/test-utils";
// import toggle = Simulate.toggle;
import useToggle from "../custom-hooks/useToggle";

const ToggleComponent:FC = () => {
    const [isToggled, toggle] = useToggle();
    return (
        <div>
            <p>{isToggled ? "On" : "Off"}</p>
            <button onClick={toggle}>Toggle</button>
        </div>
    );
};

export default ToggleComponent;
