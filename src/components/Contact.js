import { Link, Outlet } from "react-router-dom";

export function Contact () {
    return (
        <>
        <h1>Hello I am from Contact page contact me mob:8869937308</h1>
        <Link to = "company">Company</Link>
        <Link to = "channel">Channel</Link>
        <Outlet/>
        </>
    )
}