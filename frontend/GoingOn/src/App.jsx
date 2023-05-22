import './App.css'

import LoginScreen from "./components/auth/LoginScreen.jsx";
import ChatsPage from "./pages/ChatsPage.jsx";
import {useState} from "react";

function App() {
    const [user, setUser] = useState(undefined)

    if (!user) {
        return <div className={'bg-gray-950 h-screen'}><LoginScreen onAuth={user => setUser(user)}/></div>;
    } else {
        return <ChatsPage user={user} />
    }
}

export default App
