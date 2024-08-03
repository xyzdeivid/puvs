import { useNavigate } from 'react-router-dom'

import { buttonStyle } from 'styles'

import Container from 'components/common/Container'
import UserInformation from 'components/pages/User/UserInformation'

export default function Info() {

    const navigate = useNavigate()

    return (
        <Container>
            <UserInformation />
            <div>
                <span>Crie sua dieta </span>
                <button onClick={() => navigate('/dietpage')} style={buttonStyle}>aqui!</button>
            </div>
        </Container>
    )
}