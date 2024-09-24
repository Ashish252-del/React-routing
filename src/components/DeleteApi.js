import React,{useEffect,useState} from 'react'
function DeleteApi() {
  const [users,setUser]=useState([])
  useEffect(()=>{
    getList();
  },[])
  function getList () {
    fetch("http://localhost:4000/todo").then((result)=>{
        result.json().then((resp)=>{
          // console.warn(resp)
          setUser(resp)
        })
      })
  }
  function deleteUser (id) {
    fetch(`http://localhost:4000/delete/${id}`).then((result)=>{
        result.json().then((resp)=>{
          // console.warn(resp)
         if(resp.Success == true) getList()
        })
      })
  }
  console.warn(users)
  return (
    <div className="App">
      <h1>Get API Call </h1>
      <table border="1">
       <tbody>
       <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Email</td>
          <td>Mobile</td>
          <td>Operation</td>
        </tr>
        {
          users.map((item,i)=>
            <tr key={i}>
            <td>{item.userId}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
            <td>{item.mobile}</td>
            <button onClick={()=>deleteUser(item.id)}>Delete</button>
          </tr>
          )
        }
       </tbody>
      </table>
    </div>
  );
}
export default DeleteApi;