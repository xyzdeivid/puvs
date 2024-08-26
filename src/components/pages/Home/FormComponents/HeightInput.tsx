import { numberInputStyle } from 'styles'

import InputContainer from 'components/common/Form/inputs/InputContainer'

interface HeightInputProps {
    setHeight: React.Dispatch<React.SetStateAction<number>>
}

export default function HeightInput({ setHeight }: HeightInputProps) {

    return (
        <InputContainer labelText='Altura (cm)'>
            <input style={numberInputStyle} onChange={e => setHeight(Number(Number(e.target.value)))} type='number' required />
        </InputContainer>
    )
}