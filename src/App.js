import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import {Button} from "./components/Form";
import Dialog from "./components/Dialog/Dialog";
import Snackbar from "./components/Snackbar/Snackbar";
import Menu from "./components/Menu";
import {UsersContainer} from "./components/User";

function App() {
    const [modal, setModal] = useState(false);
    const [visibleSnackbar, setSnackbarVisible] = useState(true);
    const [processType, setProcessType] = useState('');
    const [showMenu, setShowMenu] = useState(false);

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

    const handleShowMenuClick = () => {
        setShowMenu(!showMenu);
    }

    return (
        <Router>
            <Button className="menu-trigger" handleClick={handleShowMenuClick} margin="0">
                <span>Ex3 - Menu Trigger</span>
            </Button>
            {showMenu &&
            <Menu handleShowClick={handleShowMenuClick}/>
            }
            <Switch>
                <Route path="/exercise-1">
                    <div className="buttons-wrapper">
                        <Button handleClick={handleShowClick}>
                            <span>Show dialog</span>
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
                    </div>
                </Route>
                <Route path="/exercise-2">
                    <div className="buttons-wrapper">
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
                        {visibleSnackbar &&
                        <Snackbar
                            type={processType}
                            horizontalPosition="center"
                            verticalPosition="center"
                            time="4000"
                            setVisible={setSnackbarVisible}
                        />
                        }
                    </div>
                </Route>
                <Route path="/exercise-4">
                    <div className="users-list">
                        <UsersContainer/>
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
