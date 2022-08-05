const increase = (num)=>{
    return {
        type: "INCREMENT",
        payload: num
    }
}

export {increase}