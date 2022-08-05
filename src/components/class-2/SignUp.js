import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'

function SignUp(props) {
    let {register, user, inputChange, btnStyle} = props
    const formik = useFormik({
        initialValues:{
            fname: '',
            lname: '',
            email: '',
            pword: ''
        },
        onSubmit: ()=>{
            console.log(formik.values)
        },
        validationSchema: yup.object({
            firstname: yup.string().required('FirstName is required'),
            lastname: yup.string().required('LastName is required'),
            email: yup.string().email()
        })
    })
    return(
    <div>
        <h1 className="text-center">Sign Up</h1>
        <input type="text" placeholder="First Name" className="form-control my-2" name="fname" value={user.fname} onChange={(e)=>inputChange(e.target.name, e.target.value)} />
        <input type="text" placeholder="Last Name" className="form-control my-2" name="lname" value={user.lname} onChange={(e)=>inputChange(e.target.name, e.target.value)} />
        <input type="text" placeholder="Email" className="form-control my-2" name="email" value={user.email} onChange={(e)=>inputChange(e.target.name, e.target.value)} />
        <input type="text" placeholder="Password" className="form-control my-2" name="pword" value={user.pword} onChange={(e)=>inputChange(e.target.name, e.target.value)} />
        <button className={btnStyle.style} onClick={()=>register()}>{btnStyle.innerText}</button>
        <br/>
        <form action='' onSubmit={formik.handleSubmit}>
        <h1 className='text-center'>FormikForm</h1>
        <input type="text" placeholder="First Name" className="form-control my-2" name="fname" onChange={formik.handleChange} value={formik.values.fname} />
        <input type="text" placeholder="Last Name" className="form-control my-2" name="lname" onChange={formik.handleChange} value={formik.values.lname} />
        <input type="text" placeholder="Email" className="form-control my-2" name="email" onChange={formik.handleChange} value={formik.values.email} />
        <input type="text" placeholder="Password" className="form-control my-2" name="pword" onChange={formik.handleChange} value={formik.values.pword} />
        <button className="btn btn-danger" type="submit" disabled={formik.isValid}>Register Formik</button>
        </form>
    </div>
    )
}

export default SignUp