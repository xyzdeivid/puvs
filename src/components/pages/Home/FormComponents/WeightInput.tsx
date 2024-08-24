import { numberInputStyle } from 'styles'

import InputContainer from 'components/common/Form/inputs/InputContainer'
import Label from 'components/common/Label'

interface WeightInputProps {
    setWeight: React.Dispatch<React.SetStateAction<number>>
}

export default function WeightInput({ setWeight }: WeightInputProps) {

    return (
        <InputContainer>
            <Label name='Peso' />
            <input style={numberInputStyle} onChange={e => setWeight(Number(Number(e.target.value)))} type='number' step='0.1' required />
        </InputContainer>
    )
}