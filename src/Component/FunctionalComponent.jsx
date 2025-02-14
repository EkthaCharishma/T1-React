import React from 'react'
import './myStyles.css'

funFunctionalComponent(props){
    console.log(props);
    let className=props.apply ?'heading': '';
    let inline={
        color:'Red',
        fontSize:'20px'
    }
    return (
        <div>
            <h1 style={inline}>Welcom to MRU {props.city}</h1>
    </div>
    )
}

export default FunctionalComponent
