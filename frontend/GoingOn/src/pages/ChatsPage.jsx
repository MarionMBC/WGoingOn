import React from 'react';
import {PrettyChatWindow} from "react-chat-engine-pretty";
import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from "react-chat-engine-advanced";

const ChatsPage = ({user}) => {
    const chatProps = useMultiChatLogic('d456240f-2c3e-4862-ae08-383704ee0340', user.username, user.secret)
    return (
        <div className="bg-gray-800 h-screen">
            <PrettyChatWindow
                projectId='da11d344-966f-4519-9084-610a562e88e5'
                username={user.username}
                secret={user.secret}
                first_name={user.first_name}
                style={{backgroundColor:'red'}}
            />
        </div>
    );
};

export default ChatsPage;
