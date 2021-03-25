import React, {useEffect, useState} from "react";

import './Snackbar.css';

function Snackbar({type, horizontalPosition, verticalPosition, time = 5000, setVisible}) {
    let backgroundColor = "";
    let bottom = 'auto';
    let content = "";
    let left = 'auto';
    let right = 'auto';
    let top = 'auto';

    switch (type) {
        case 'warning':
            content = 'This is a warning message';
            backgroundColor = '#ff9800';
            break;
        case 'success':
            content = 'This is a success message';
            backgroundColor = '#4caf4b';
            break;
        case 'information':
            content = 'This is a information message';
            backgroundColor = '#2196f3';
            break;
        case 'error':
            content = 'This is a error message';
            backgroundColor = '#f44336';
            break;
    }

    switch (verticalPosition) {
        case 'top':
            top = '0';
            break;
        case 'center':
            top = '50%';
            break;
        case 'bottom':
            bottom = '0';
            break;
    }

    switch (horizontalPosition) {
        case 'left':
            left = '0';
            break;
        case 'center':
            left = '50%';
            break;
        case 'right':
            right = '0';
            break;
    }

    const styles = {
        backgroundColor: backgroundColor,
        bottom: bottom,
        left: left,
        right: right,
        top: top
    }

    useEffect(() => {
        const timer = setTimeout(function () {
            setVisible(false);
        }, time)

        return () => clearTimeout(timer);
    }, [])

    return (
        <div style={styles} className="snackbar-wrapper">
            <div>{content}</div>
        </div>
    );
}

export default Snackbar;