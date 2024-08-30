import { useState } from "react"

export default function Counter(){

    const [count, setCount] = useState(0);

    const addHandl = () =>{

        const newCount = count + 1;
        setCount(newCount)
    }

    const reduseHandl = () =>{
        const newCount = count - 1;

        if(newCount < 0){
            return
        }
       

        setCount(newCount);
    }
    const resetHandl = () =>{
        

        setCount(0);
    }


return(
    <div>
        <h2>Count: {count}</h2> 
        
       <div style={{display: "flex", gap: '10px'}}>
       <button onClick={addHandl}>Add</button> 
        <button onClick={reduseHandl} >Redus</button> 
        <button onClick={resetHandl} >Reset</button> 
       </div>
    </div>
)



}