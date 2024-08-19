import InputContainer from 'components/common/Form/inputs/InputContainer'
import Label from 'components/common/Label'

interface AgeInputProps {
    setAge: React.Dispatch<React.SetStateAction<number>>
}

export default function AgeInput({ setAge }: AgeInputProps) {

    const inputStyle: React.CSSProperties = {
        maxWidth: '50px',
        backgroundColor: '#EEEBEB',
        border: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
        textAlign: 'center'
    }

    return (
        <InputContainer>
            <Label name='Idade' />
            <input style={inputStyle} onChange={e => setAge(Number(Number(e.target.value)))} type='number' required />
        </InputContainer>
    )
}