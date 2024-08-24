import { numberInputStyle } from 'styles'

import InputContainer from 'components/common/Form/inputs/InputContainer'
import Label from 'components/common/Label'

interface AgeInputProps {
    setAge: React.Dispatch<React.SetStateAction<number>>
}

export default function AgeInput({ setAge }: AgeInputProps) {

    return (
        <InputContainer>
            <Label name='Idade' />
            <input style={numberInputStyle} onChange={e => setAge(Number(Number(e.target.value)))} type='number' required />
        </InputContainer>
    )
}