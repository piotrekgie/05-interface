import React, {useState} from 'react';

import Dialog from "./components/Dialog/Dialog";
import Snackbar from "./components/Snackbar/Snackbar";
import {Button} from "./components/Form";

function App() {
    const [modal, setModal] = useState(false);
    const [visible, setSnackbarVisible] = useState(true);
    const [processType, setProcessType] = useState('');

    const handleShowClick = () => {
        setModal(!modal);
    }

    const handleConfirmClick = () => {
        console.log("Confirm click");
    }

    const handleAbortClick = () => {
        console.log("Abort click");
    }

    const handleSnackbarClick = (type) => {
        setProcessType(type);
        setSnackbarVisible(true);
    }

    return (
        <>
            <Button handleClick={handleShowClick}>
                <span>Show dialog</span>
            </Button>
            <Button handleClick={(e) => {
                handleSnackbarClick('success')
            }}>
                <span>Show success</span>
            </Button>
            <Button handleClick={(e) => {
                handleSnackbarClick('warning')
            }}>
                <span>Show warning</span>
            </Button>
            <Button handleClick={(e) => {
                handleSnackbarClick('information')
            }}>
                <span>Show information</span>
            </Button>
            <Button handleClick={(e) => {
                handleSnackbarClick('error')
            }}>
                <span>Show error</span>
            </Button>
            <Dialog
                title="Dialog title"
                content="Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."
                open={modal}
                handleShowClick={handleShowClick}
                handleConfirmClick={handleConfirmClick}
                handleAbortClick={handleAbortClick}
                confirm="true"
                abort="true"
            />
            {visible &&
            <Snackbar
                type={processType}
                horizontalPosition="center"
                verticalPosition="center"
                time="4000"
                setVisible={setSnackbarVisible}
            />
            }
        </>
    );
}

export default App;
