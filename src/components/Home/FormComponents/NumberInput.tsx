import InputContainer from '../../common/InputContainer'
import Label from '../../common/Label'

interface NumberInputProps {
    name: string
    setValue: React.Dispatch<React.SetStateAction<number>>
    step?: string
}

export default function NumberInput({ name, setValue, step }: NumberInputProps) {

    const inputStyle: React.CSSProperties = {
        maxWidth: '50px',
        border: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
    }

    return (
        <InputContainer>
            <Label name={name} />
            <input style={inputStyle} onChange={e => setValue(Number(Number(e.target.value)))} type='number' step={step ? step : '1'} required />
        </InputContainer>
    )
}