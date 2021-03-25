import React, {useState} from 'react';

import Dialog from "./components/Dialog/Dialog";
import {Button} from "./components/Form";

function App() {
    const [modal, setModal] = useState(false);

    const handleShowClick = () => {
        setModal(!modal);
    }

    const handleConfirmClick = () => {
        console.log("Confirm click");
    }

    const handleAbortClick = () => {
        console.log("Abort click");
    }

    return (
        <>
            <Button handleClick={handleShowClick}>
                <span>Show dialog</span>
            </Button>
            <Dialog
                open={modal}
                handleShowClick={handleShowClick}
                handleConfirmClick={handleConfirmClick}
                handleAbortClick={handleAbortClick}
                confirm="true"
                abort="true"
            />
        </>
    );
}

export default App;
