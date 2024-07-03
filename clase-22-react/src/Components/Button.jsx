import React from "react";

const Button = (props) => {

    return (
        <button className="btn-primary">{props.children}</button>
    )
}

export default Button