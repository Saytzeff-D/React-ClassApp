import React from 'react';

function DisplayUser(props) {
    let {userTray, deleteUser, handleEdit} = props
    
    return(
        <div>
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
    )
}

export default DisplayUser