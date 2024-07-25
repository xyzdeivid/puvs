import { buttonStyle } from 'styles'

interface FormButtonProps {
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FormButton({ setShowForm }: FormButtonProps) {

    return (
        <button style={buttonStyle} onClick={() => setShowForm(true)}>Descubra!</button>
    )
}