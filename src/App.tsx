import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from 'pages/Home'
import User from 'pages/User'
import Diet from 'pages/Diet'
import UserProvider from 'UserInfo'

import './App.css'

export default function App() {

    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/user' element={<User />} />
                    <Route path='/dietpage' element={<Diet />} />
                </Routes>
            </Router>
        </UserProvider>
    )
}