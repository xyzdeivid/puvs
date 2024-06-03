interface FormButtonProps {
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FormButton({ setShowForm }: FormButtonProps) {

    const buttonStyle: React.CSSProperties = {
        border: 'none',
        fontSize: '16px',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        cursor: 'pointer'
    }

    return (
        <button style={buttonStyle} onClick={() => setShowForm(true)}>Descubra!</button>
    )
}