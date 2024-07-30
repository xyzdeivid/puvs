interface OpenFormButtonProps {
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>
    buttonText: string
}

export default function OpenFormButton({ setShowForm, buttonText }: OpenFormButtonProps) {

    const buttonStyle: React.CSSProperties = {
        border: 'none',
        fontSize: '16px',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        cursor: 'pointer'
    }

    return (
        <button style={buttonStyle} onClick={() => setShowForm(true)}>{buttonText}</button>
    )
}