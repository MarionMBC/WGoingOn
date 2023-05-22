import React from 'react';
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = ({ user }) => {
    return (
        <div className="bg-gray-800 h-screen">
            <PrettyChatWindow
                projectId='da11d344-966f-4519-9084-610a562e88e5'
                username={user.username}
                secret={user.secret}
                first_name={user.first_name}
                style={{ backgroundColor: 'red' }}
            />
        </div>
    );
};

export default ChatsPage;
