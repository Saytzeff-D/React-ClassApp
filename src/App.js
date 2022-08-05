import React, { useState } from "react";
import SignUp from "./components/class-2/SignUp"
import DisplayUser from "./components/class-2/DisplayUser"
import NetFlix from "./components/ass-2/netflix";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import UploadFile from "./components/class-3/uploadFile";
import Login from "./components/class-2/Login";
import Dashboard from "./components/class-2/Dashboard";
import { useSelector } from "react-redux";
import FirstClass from "./components/redux-class/FirstClass";
import Chat from "./components/class-4/Chat";

function App(){
  const url = 'http://localhost:2000/users/signup'
  const [userTray, setUserTray] = useState([])
  const [editIndex, setEditIndex] = useState('')
  const [user, setUser] = useState({fname: '', lname: '', email: '', pword: ''})
  const [btnStyle, setBtnStyle] = useState({style: 'btn btn-primary', innerText: 'Register'})
  const navigate = useNavigate()
  const registerUser =()=>{
    if (btnStyle.innerText === 'Register') {
      setUserTray([...userTray, user])
      setUser({fname: '', lname: '', email: '', pword: ''})
      axios.post(url, user).then((res)=>{
        if(res.data.msg === 'Success'){
          navigate('/user')
        }
      })
    } else {
      userTray[editIndex] = user
      setUserTray(userTray)
      setUser({fname: '', lname: '', email: '', pword: ''})
      setBtnStyle({style: 'btn btn-primary', innerText: 'Register'})
      navigate('/user')
    }
  }
  const inputChange =(key, value)=>{
    setUser({...user, [key]: value})
  }
  const delUser =(i)=>{
    setUserTray(userTray.filter((each, ind)=>(ind !== i)))
  }
  const editUser =(i)=>{
    navigate('/')
    setEditIndex(i)
    setUser(userTray[i])
    setBtnStyle({style: 'btn btn-warning', innerText: 'Save Changes'})
  }
  let state = useSelector(state=>state.count)
  console.log(state)
  return(
    <div>
        <NetFlix/>
      <Routes>
          <Route path="/" element={<SignUp register={registerUser} inputChange={inputChange} user={user} btnStyle={btnStyle} />}></Route>
          <Route path="/user" element={<DisplayUser userTray={userTray} deleteUser={delUser} handleEdit={editUser} />}></Route>
          <Route path="/uploadFile" element={<UploadFile/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/redux" element={<FirstClass />} />
          <Route path="/socket" element={<Chat />} />
      </Routes>
    </div>
  )
}

export default App