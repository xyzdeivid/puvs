import { useNavigate } from 'react-router-dom'

import { buttonStyle, containerStyle } from 'styles'

import UserInformation from 'components/pages/User/UserInformation'

export default function Info() {

    const navigate = useNavigate()

    return (
        <div style={containerStyle}>
            <UserInformation />
            <div>
                <span>Crie sua dieta </span>
                <button onClick={() => navigate('/dietpage')} style={buttonStyle}>aqui!</button>
            </div>
        </div>
    )
}