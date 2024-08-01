import InputContainer from 'components/common/Form/InputContainer'
import Label from 'components/common/Label'

interface TextInputProps {
    labelText: string
    setValue: React.Dispatch<React.SetStateAction<string>>
}

export default function TextInput({ labelText, setValue }: TextInputProps) {

    const inputStyle: React.CSSProperties = {
        border: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
    }

    return (
        <InputContainer>
            <Label name={labelText} />
            <input style={inputStyle} onChange={e => setValue(e.target.value)} type='text' required />
        </InputContainer>
    )
}