import { mainColor } from 'styles'

interface OpenFormButtonProps {
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>
    buttonText: string
}

const OpenFormButton = ({ setShowForm, buttonText }: OpenFormButtonProps) => {

    const buttonStyle: React.CSSProperties = {
        border: 'none',
        fontWeight: 'bold',
        backgroundColor: mainColor,
        color: 'white',
        cursor: 'pointer',
        padding: '6px',
        borderRadius: '3px'
    }

    return (
        <button style={buttonStyle} onClick={() => setShowForm(true)}>{buttonText}</button>
    )
}

export default OpenFormButton