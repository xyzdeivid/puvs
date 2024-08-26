import { numberInputStyle } from 'styles'

import InputContainer from 'components/common/Form/inputs/InputContainer'

interface WeightInputProps {
    setWeight: React.Dispatch<React.SetStateAction<number>>
}

export default function WeightInput({ setWeight }: WeightInputProps) {

    return (
        <InputContainer labelText='Peso'>
            <input style={numberInputStyle} onChange={e => setWeight(Number(Number(e.target.value)))} type='number' step='0.1' required />
        </InputContainer>
    )
}