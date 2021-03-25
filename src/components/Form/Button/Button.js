import React from "react";

function Button({className, handleClick, bgColor, color, margin, padding, children}) {
    const styles = {
        backgroundColor: bgColor || 'black',
        color: color || 'white',
        margin: margin || 20,
        padding: padding || 20,
    };

    return (
        <button className={className} style={styles} onClick={handleClick}>
            <span>{children}</span>
        </button>
    )
}

export default Button;