import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from 'pages/Home'
import User from 'pages/User'
import DietPage from 'pages/DietPage'
import UserProvider from 'UserInfo'

import './App.css'

export default function App() {

    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/user' element={<User />} />
                    <Route path='/dietpage' element={<DietPage />} />
                </Routes>
            </Router>
        </UserProvider>
    )
}