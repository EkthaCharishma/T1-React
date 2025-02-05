import React from "react";

const PropsChildrenEx=(props)=>{
    console.log(props);
    return(
        <div>PropsChildreanEx
            <hr/>
            <h1>{props.username}</h1>
            <h1>{props.company}</h1>
            {
                props.children[0]
            }
        </div>
    )
}
export default PropsChildrenEx