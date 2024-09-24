import { Link, useNavigate } from "react-router-dom";
import About from "./About";
import PreState from "./PrevState";
import PrePop from "./PrevPop";

function Home () {
    const navigate = useNavigate()
    const navigateTopage = (url)=>{
     navigate(url)
    }
    return (
        <>
        <h1>
            Hello from home Page 
        </h1>
        <p>Ok so I have nothing much to write if you want to go on the 
            about page you can click below you can leant prev state and prev prop
        </p>
        <h1>Learning Prev State </h1>
        <PreState/> <br/>
        <h1>Learning Prev props </h1>
        <PrePop/>
        <hr/>
        <Link to='/about'>About</Link>
        <br/>
        <button onClick={()=>navigateTopage('/filter')}> Go to Filter </button>
        </>
    )
}

export default Home;