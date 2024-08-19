import InputContainer from 'components/common/Form/inputs/InputContainer'
import Label from 'components/common/Label'

interface WeightInputProps {
    setWeight: React.Dispatch<React.SetStateAction<number>>
}

export default function WeightInput({ setWeight }: WeightInputProps) {

    const inputStyle: React.CSSProperties = {
        maxWidth: '50px',
        backgroundColor: '#EEEBEB',
        border: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
        textAlign: 'center'
    }

    return (
        <InputContainer>
            <Label name='Peso' />
            <input style={inputStyle} onChange={e => setWeight(Number(Number(e.target.value)))} type='number' step='0.1' required />
        </InputContainer>
    )
}