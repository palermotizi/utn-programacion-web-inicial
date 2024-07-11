// import React from "react";

// export const RowArticle = (props) => {
//     console.log(props)
//     return (
//         <>
//         <h1>{props.texto}</h1>
//         <span>{}</span>
//         <p>{}</p>
//         </>
//     )
// }


import React from "react";

export const RowArticle =(props) => {
    return (
        <>
            <h1>{props.title}</h1>
            <span>{props.fecha}</span>
            <p>{props.direccion_autor}</p>
        </>
    )
}