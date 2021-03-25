import React, {useState} from 'react';

import './Dialog.css';
import {Button} from "../Form";

function Dialog({open, handleShowClick, handleConfirmClick, handleAbortClick, confirm, abort}) {
    const styles = {
        display: open ? 'block' : 'none'
    }

    return (
        <div className="dialog-wrapper" style={styles}>
            <div className="cover"></div>
            <div className="dialog-container">
                <div className="dialog">
                    <h6>Dialog title</h6>
                    <Button className="close" handleClick={handleShowClick} margin="0" padding="5">
                        <span>X</span>
                    </Button>
                    <div>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas
                        eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
                        augue
                        laoreet rutrum faucibus dolor auctor.
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque
                        nisl
                        consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                    </div>
                    {confirm &&
                    <Button bgColor="blue" handleClick={handleConfirmClick}>
                        <span>Confirm</span>
                    </Button>
                    }
                    {abort &&
                    <Button bgColor="red" handleClick={handleAbortClick}>
                        <span>Abort</span>
                    </Button>
                    }
                </div>
            </div>
        </div>
    );
}

export default Dialog;