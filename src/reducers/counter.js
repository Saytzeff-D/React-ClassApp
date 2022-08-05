const initState = {
    count: 0
}
const counter = (state=initState, action)=>{
    if(action.type === "INCREMENT"){
        return {count: state.count+action.payload}
    }
    return state
}

export default counter