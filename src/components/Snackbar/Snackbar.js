import React, {useEffect} from "react";

import './Snackbar.css';

function Snackbar({type, horizontalPosition, verticalPosition, time, setVisible}) {
    let backgroundColor = "";
    let bottom = 'auto';
    let color = "black";
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
            color = 'white';
            content = 'This is a success message';
            backgroundColor = '#4caf4b';
            break;
        case 'information':
            content = 'This is a information message';
            backgroundColor = '#2196f3';
            break;
        case 'error':
            color = 'white';
            content = 'This is a error message';
            backgroundColor = '#f44336';
            break;
        default:
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
        default:
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
        default:
            break;
    }

    const styles = {
        backgroundColor: backgroundColor,
        bottom: bottom,
        color: color,
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