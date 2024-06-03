import { mainGradiente } from '../../../styles'

export default function ConfirmButton() {

    const buttonStyle: React.CSSProperties = {
        border: 'none',
        background: mainGradiente,
        color: 'white',
        padding: '6px',
        fontWeight: 'bold',
        cursor: 'pointer',
        marginTop: '32px',
        borderRadius: '3px'
    }

    return (
            <button style={buttonStyle} type='submit'>Verificar</button>
    )
}