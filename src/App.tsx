import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import UserProvider from 'UserInfo'

import Home from 'pages/Home'
import User from 'pages/User'
import Diet from 'pages/Diet'

import './App.css'

const App = () => {

    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/user' element={<User />} />
                    <Route path='/diet' element={<Diet />} />
                </Routes>
            </Router>
        </UserProvider>
    )
}

export default App