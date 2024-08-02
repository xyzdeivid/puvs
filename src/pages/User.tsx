import { useNavigate } from 'react-router-dom'

import { buttonStyle, mainColor, containerStyle } from 'styles'

import Information from 'components/pages/User/Information'

export default function Info() {

    const circleStyle: React.CSSProperties = {
        width: '16px',
        height: '16px',
        boxShadow: `5px 5px 10px ${mainColor}`,
        position: 'absolute',
        top: '-26px',
        left: '-8px',
        borderRadius: '50%',
    }

    const navigate = useNavigate()

    return (
        <div style={containerStyle}>
            <div style={{ position: 'relative', marginBottom: '16px' }}>
                <div style={circleStyle}></div>
                <Information />
            </div>
            <div>
                <span>Crie sua dieta </span>
                <button onClick={() => navigate('/dietpage')} style={buttonStyle}>aqui!</button>
            </div>
        </div>
    )
}