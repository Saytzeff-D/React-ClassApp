import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'

function SignUp(){
    const [editInd, setEditInd] = useState('')
    const [user, setUser] = useState({fname: '', lname: '', email: '', pword: ''})
    const [userTray, setUserTray] = useState([])
    const [editObj, setEditObj] = useState({fname: '', lname: '', email: ''})
    const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleEdit = (i) => {
    setShow(true);
    setEditInd(i)
    if (i) {
        setEditObj(userTray[i])
    } else {
        setEditObj(userTray[i])
    }
  }

    const inputChange = (e)=>{
        setUser({...user, [e.target.name]: e.target.value})
    }
    const editInputChange = (e)=>{
        setEditObj({...editObj, [e.target.name]: e.target.value})
    }
    const register = ()=>{
        setUserTray([...userTray, user])
    }
    const deleteUser =(i)=>{
        let newArr = userTray.filter((each, index)=>(index !== i))
        setUserTray(newArr)
    }
    const saveChanges = ()=>{
        setShow(false)
        userTray[editInd] = editObj
        setUserTray(userTray)
    }
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-6 shadow-sm">
                        <h1 className="text-center">Sign Up</h1>
                        <input type="text" placeholder="First Name" className="form-control my-2" name="fname" value={user.fname} onChange={inputChange} />
                        <input type="text" placeholder="Last Name" className="form-control my-2" name="lname" value={user.lname} onChange={inputChange} />
                        <input type="text" placeholder="Email" className="form-control my-2" name="email" value={user.email} onChange={inputChange} />
                        <input type="text" placeholder="Password" className="form-control my-2" name="pword" value={user.pword} onChange={inputChange} />
                        <button className="btn btn-primary" onClick={register}>Register</button>
                    </div>
                    <div className='col-6 shadow-sm'>
                        <h1>All Users</h1>
                        <table className='table'>
                            <tr>
                                <th>S/N</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Email</th>
                                <th>Actions</th>
                                <th>Actions</th>
                            </tr>
                        {userTray.map((each, index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{each.fname}</td>
                                <td>{each.lname}</td>
                                <td>{each.email}</td>
                                <td><button className='btn btn-danger' onClick={()=>handleEdit(index)}>Edit</button> </td>
                                <td><button className='btn btn-warning' onClick={()=>deleteUser(index)}>Del</button></td>
                            </tr>
                        ))}
                        </table>
                    </div>
                </div>
            </div>

            <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type="text" placeholder="First Name" className="form-control my-2" name="fname" value={editObj.fname} onChange={editInputChange} />
            <input type="text" placeholder="Last Name" className="form-control my-2" name="lname" value={editObj.lname} onChange={editInputChange} />
            <input type="text" placeholder="Email" className="form-control my-2" name="email" value={editObj.email} onChange={editInputChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}
export default SignUp