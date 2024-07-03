import React from "react";

const CodePointInfo = (props) => {
    return (
        <div>
            <header>
                <h1>{props.title}</h1>
            </header>
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default CodePointInfo