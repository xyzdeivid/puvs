import { numberInputStyle } from 'styles'

import InputContainer from 'components/common/Form/inputs/InputContainer'

interface AgeInputProps {
    setAge: React.Dispatch<React.SetStateAction<number>>
}

export default function AgeInput({ setAge }: AgeInputProps) {

    return (
        <InputContainer labelText='Idade'>
            <input style={numberInputStyle} onChange={e => setAge(Number(Number(e.target.value)))} type='number' required />
        </InputContainer>
    )
}