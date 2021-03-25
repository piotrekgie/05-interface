import React, {useState} from 'react';

import './Dialog.css';
import {Button} from "../Form";

function Dialog({title, content, open, handleShowClick, handleConfirmClick, handleAbortClick, confirm, abort}) {
    const styles = {
        display: open ? 'block' : 'none'
    }

    return (
        <div className="dialog-wrapper" style={styles}>
            <div className="cover"></div>
            <div className="dialog-container">
                <div className="dialog">
                    <h6>{title}</h6>
                    <Button className="close" handleClick={handleShowClick} margin="0" padding="5">
                        <span>X</span>
                    </Button>
                    <div>{content}</div>
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