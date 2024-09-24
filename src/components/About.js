import { Link } from "react-router-dom";

function About () {
    return (
        <>
        <h1>
            Hello from About Page 
        </h1>
        <Link to = '/user/Ashish' state={{name:'Ashish Patel '}}>Ashish </Link> <br/>
        <Link to = '/user/Abhay'>Abhay </Link>
        </>
    )
}

export default About;