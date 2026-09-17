import './intro.css'
import {useState , useEffect} from 'react';

function Intro({name , age , course}){

    // This is an example of useState it updates the like counter 
    // everytime the handleLike is being called.
    const [likes , setLikes] = useState(0);
    const [email , setEmail] = useState("No email found.");

    const handleLike = () => {
        setLikes(likes + 1);
    }
    
    /* 
    useEffect is a built-in React hook that lets you synchronize your component with external systems. 
    It runs code after the component renders on the screen, making it the primary tool for side effects that
    happen outside of the normal UI rendering loop.
    */
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if(!response.ok) throw new Error("Status" + response.status);
            return response.json();
        }).then(data => setEmail(data[0].email));
    } ,  []);

    return(
        <div className="intro-card">
            <h3>Hi! im {name}</h3>
            <p>Im {age} years old</p>
            <p>My course is {course}</p>
            <p>{email}</p>
            <button onClick={handleLike}>{likes}</button>
        </div>
    )
}
export default Intro;