import React, { useEffect, useState } from 'react';
import socketClient from 'socket.io-client'

function Chat(props) {
    const [socket, setSocket] = useState('')
    const [msgTray, setMsgTray] = useState([])
    const url = 'http://localhost:2000/'
    useEffect(()=>{
        setSocket(socketClient(url))
    }, [])
    const [message, setMessage] = useState('')

    const sendMessage = ()=>{
        socket.emit('sendMessage', message)
        setMessage('')
        socket.on('receiveMsg', (message)=>{
            console.log(message)
            setMsgTray(message)
        })
    }
    
    return (
        <div>
            <h1>Not WhatsApp</h1>
            {
                msgTray.map((eachMsg, i)=>(
                    <div key={i}>{eachMsg}</div>
                ))
            }
            <input placeholder='Type a message' value={message} className='form-control' onChange={(e)=>{setMessage(e.target.value)}} />
            <button className='btn btn-danger' onClick={sendMessage}>Send Chat</button>
        </div>
    );
}

export default Chat;