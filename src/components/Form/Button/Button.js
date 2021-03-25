import React from "react";

function Button({handleClick, margin, padding, children}) {
    const styles = {
        backgroundColor: 'black',
        color: 'white',
        margin: margin || 20,
        padding: padding || 20,
    };

    return (
        <button style={styles} onClick={handleClick}>
            <span>{children}</span>
        </button>
    )
}

export default Button;