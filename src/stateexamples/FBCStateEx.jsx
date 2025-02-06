import React,{useState} from 'react';
const FBCStateEx=()=>{
    // const data=React.useState(100);
    // console.log(data);
    // console.log(data[1]);
    const [value, setValue]=useState("MRU");
    // console.log(value);
    let changeName=()=>{
        setValue("Mallareddy University");
    }
    return(
        <div>FBCStateEx
            <h1>{value}</h1>
            <button onClick={changeName}>Change State</button>
        </div>
    )
}
export default FBCStateEx;