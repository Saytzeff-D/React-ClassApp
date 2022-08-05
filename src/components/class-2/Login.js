import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            pword: ''
        },
        onSubmit: ()=>{
            axios.post('http://localhost:2000/users/signin', formik.values).then((res)=>{
                if(res.data.msg === 'Valid Password'){
                    sessionStorage.setItem('token', res.data.token)
                    navigate('/dashboard')
                }
                else{
                    alert(res.data.msg)
                }
            })
        }
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
            <input type="text" placeholder="Email" className="form-control my-2" name="email" onChange={formik.handleChange} value={formik.values.email} />
        <input type="text" placeholder="Password" className="form-control my-2" name="pword" onChange={formik.handleChange} value={formik.values.pword} />
        <button type="submit" className='btn btn-warning'>Login</button>
            </form>
        </div>
    );
}

export default Login;   