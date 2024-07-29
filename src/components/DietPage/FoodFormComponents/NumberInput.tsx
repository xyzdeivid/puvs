import InputContainer from 'components/common/InputContainer'
import Label from 'components/common/Label'

interface NumberInputProps {
    labelText: string
    setValue: React.Dispatch<React.SetStateAction<number>>
}

export default function NumberInput({ labelText, setValue }: NumberInputProps) {
    return (
        <InputContainer>
            <Label name={labelText} />
            <input onChange={e => setValue(Number(e.target.value))} type='number' required />
        </InputContainer>
    )
}