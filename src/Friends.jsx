
import { useState, useEffect} from "react"
import Friend from "./Friend";
// import Friend from "./Friend";

export default function Friends(){

    const [friens, setFriends] = useState([]);

    useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(res => res.json())
       .then(data => setFriends(data))
    },[])



    return(

        <div>
            <h1>Friends: {friens.length} </h1>
            {
                friens.map(friend => <Friend friend={friend} ></Friend>)
            }
        </div>
    )
}