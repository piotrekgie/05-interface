import React, {useState} from 'react';

import Dialog from "./components/Dialog/Dialog";
import {Button} from "./components/Form";

function App() {
    const [modal, setModal] = useState(false);

    const handleClick = () => {
        setModal(!modal);
    }

    return (
        <>
            <Button handleClick={handleClick}>
                <span>Show dialog</span>
            </Button>
            <Dialog open={modal} handleClick={handleClick}/>
        </>
    );
}

export default App;
