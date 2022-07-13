import React, { useState } from "react";

export const Todolist = () => {
const [todo,setTodo] = useState("")
const [todoResult, setTodoResult] =useState([])
const todoTab = (event)=> {
    if(event.keyCode = 13){
        console.log(event)

    }
    
}
    return (
        <div>
            <body>
                <input onKeyDown={todoTab}type="text" placeholder="enter your name" />


            </body>

        </div>
    )
} 