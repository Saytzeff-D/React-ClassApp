import axios from "axios"
const url = 'http://localhost:2000/users'

const initstate = []

const allUser = (state=initstate, action)=>{
    axios.get(url).then((res)=>{
        return res.data
    })
    return state
}

export default allUser