import React, {FC} from 'react';
import './App.css';
import ToggleComponent from "./component/ToggleComponent";
import PreviousComponent from "./component/PreviousComponent";

const App: FC = () => {
    return (
        <>
            <ToggleComponent/>
            <hr/>
            <PreviousComponent/>
        </>
    );
}

export default App;
