import InputContainer from 'components/common/Form/InputContainer'
import Label from 'components/common/Label'

interface NumberInputProps {
    labelText: string
    setValue: React.Dispatch<React.SetStateAction<number>>
    step?: string
}

export default function NumberInput({ labelText, setValue, step }: NumberInputProps) {

    const inputStyle: React.CSSProperties = {
        maxWidth: '50px',
        backgroundColor: '#EEEBEB',
        border: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
        textAlign: 'center'
    }

    return (
        <InputContainer>
            <Label name={labelText} />
            <input style={inputStyle} onChange={e => setValue(Number(Number(e.target.value)))} type='number' step={step ? step : '1'} required />
        </InputContainer>
    )
}