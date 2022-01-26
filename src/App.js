import {useSelector} from "react-redux";
import {addUser, deleteUser, updateUser} from "./Features/Users";
import {useDispatch} from "react-redux";
import {useState} from "react";
import "./App.css";


function App() {
   const userList = useSelector(state => state.users.value);
   const dispatch = useDispatch();
     
   const [name, setName] = useState("");
   const [username, setUsername] = useState("");
   const [newUsername, setNewUsername] = useState("");

   const changeName = (e) => {
        setName(e.target.value)
   }
   const changeUsername = (e) => {
    setUsername(e.target.value)
}

    const updateUsername= (e) => {
      setNewUsername(e.target.value)
    }
  return (
    <div className="App">
    
      <div className='addUser'>
        <input type="text" placeholder ="Name..." onChange={changeName}/>
        <input type="text" placeholder ="Username..." onChange={changeUsername}/>
        <button onClick={() => {dispatch(addUser({id:[userList.length.id-1].id+1,
         name:name,
          username:username
          }))}}>
          Add User</button>
      </div>
      <div className='displayUsers'>
        {userList.map((user) => {
          return(
            <div>
             <h1>{user.name}</h1>
             <h1>{user.username}</h1>
             <input type="text" placeholder = "Change Username" onChange={updateUsername}/>
             <button onClick={() => {dispatch(updateUser({id:user.id, username:newUsername}))}}>Add Username</button>
             <button onClick={() => {dispatch(deleteUser({id: user.id}))}}>Delete User</button>
             </div>)
        })}
      </div>
    </div>
  );
}

export default App;
