const { useSearchParams } = require("react-router-dom");

export function Filter() {
    const [searchParams , setSearchParams] = useSearchParams();
    const age = searchParams.get('age');
    const city = searchParams.get('city');
    return (
        <>
        <h1>Hoo hoo Filer Page is there </h1>
        <h2>age is {age}</h2>
        <h3>city is {city}</h3>
        <input placeholder="set age in query " onChange={(e)=>{setSearchParams({age:e.target.value,city:'Banaras'})}}></input>
        <input placeholder="set city in query " onChange={(e)=>{setSearchParams({city:e.target.value,age:21})}}></input>
        </>
    )
}