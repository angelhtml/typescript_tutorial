import React from "react";
import { content } from "../types/content";



export default function Card(props : content){

    function handleClick(e : React.MouseEventHandler<HTMLButtonElement> ){
        console.log(e)
    }
    return(
            <div style={{width:"16rem",margin:"1rem",border:"1px solid red",padding:".5rem",borderRadius:"10px"}}>
                <h1>{props.title}</h1>
                <p>{props.id}</p>
                <button onClick={() => handleClick(props.id)}>button</button>
            </div>


    )
}