import MoreVert from '@mui/icons-material/MoreVert';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import { Avatar, IconButton } from '@mui/material';
import React, { useState } from 'react';
import "./Chat.css";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SelectInput from '@mui/material/Select/SelectInput';
import MicIcon from '@mui/icons-material/Mic';
import axios from "./axios.js";


function Chat({ messages }) {

    const [input, setInput] = useState("");

    const sendMessage = async (e) =>{
        e.preventDefault();

        axios.post('/messages/new',{
            message: input,
            name: "Vineet",
            timestamp: "Just now",
            received: false
        });

        setInput("");
    };
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />

                <div className="chat_headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat_body">
                {messages.map((message) => (
                    <p className={`chat_message  ${!message.received && 'chat_reciever'}`}>
                        <span className="chat_name">
                            {message.name}
                        </span>
                        {message.message}
                        <span className="chat_timestamp">
                            {message.timestamp}
                        </span>
                    </p>


                ))}


                {/* <p className="chat_reciever chat_message">
                    <span className="chat_name">
                        Vineet
                    </span>
                    This is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p> */}


            </div>

            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form>
                    <input value = {input} onChange = { e => setInput(e.target.value)}
                        placeholder="Type a message"
                        type="text" />
                    <button onClick={sendMessage} type="submit">
                        Send a message
                    </button>
                </form>
                <MicIcon />
            </div>
        </div>
    );
}

export default Chat
