import axios from 'axios'
import React, { useState } from 'react'

function UploadFile() {
    const url = 'http://localhost:2000/users/upload'
    // const [imageUrl, setImageUrl] = useState('')
    const [myFile, setMyFile] = useState('')
    const pickFile = (e)=>{
        const file  = e.target.files[0]
        console.log(file)
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload=()=>{
            const result = reader.result
            setMyFile(result)
        }
    }
    const upload = ()=>{
        console.log(myFile)
        const userData = {myFile}
        axios.post(url, userData).then((res)=>{
            console.log(res.data)
            // setImageUrl(res.data)
        })
    }
    return(
        <div>
            <input className="form-control" onChange={pickFile} type="file" />
            <button className='btn btn-dark' onClick={upload} >Upload</button>
            <img src="https://res.cloudinary.com/ololadedavid15/image/upload/v1654358967/hh0wfmgcil91ptlphelr.jpg" alt="upload" />
        </div>
    )
}

export default UploadFile