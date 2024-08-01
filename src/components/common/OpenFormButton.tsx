import { mainColor } from 'styles'

interface OpenFormButtonProps {
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>
    buttonText: string
}

export default function OpenFormButton({ setShowForm, buttonText }: OpenFormButtonProps) {

    const buttonStyle: React.CSSProperties = {
        border: 'none',
        fontSize: '16px',
        fontWeight: 'bold',
        backgroundColor: mainColor,
        color: 'white',
        cursor: 'pointer',
        padding: '8px',
        borderRadius: '8px'
    }

    return (
        <button style={buttonStyle} onClick={() => setShowForm(true)}>{buttonText}</button>
    )
}