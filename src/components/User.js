import { Link, useLocation, useParams } from "react-router-dom"

 export function User () {
    const location = useLocation();
    const params = useParams();
    const {name }= params;
    console.log(location);
    return (
        <>
        <h1>
            hello this is users {name}
        </h1>
        <Link to="/">Back to Home </Link>
        </>
    )

}