import './intro.css'

function Intro({name , age , course}){
    return(
        <div className="intro-card">
            <h3>Hi! im {name}</h3>
            <p>Im {age} years old</p>
            <p>My course is {course}</p>
        </div>
    )
}
export default Intro