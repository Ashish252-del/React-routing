export function Login () {
    const login = ()=>{
        localStorage.setItem('login',true)
    }
    return (
        <>
        <h>Login Page </h>
        <input type="test"/>
        <button onClick={login}>Login</button>
        </>
    )
}