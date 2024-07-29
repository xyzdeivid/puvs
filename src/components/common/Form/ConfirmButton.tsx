import { mainGradiente } from 'styles'

interface ConfirmButtonProps {
    text: string
}

export default function ConfirmButton({ text }: ConfirmButtonProps) {

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
        <button style={buttonStyle} type='submit'>{text}</button>
    )

}