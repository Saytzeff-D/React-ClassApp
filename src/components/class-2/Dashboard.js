import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function Dashboard(props) {
    const navigate = useNavigate()
    const token = sessionStorage.token
    useEffect(()=>{
        axios.get('http://localhost:2000/users/dashboard', {headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }}).then((res)=>{
            console.log(res.data)
        })
    }, [token])
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
}

export default Dashboard;