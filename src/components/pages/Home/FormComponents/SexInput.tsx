import InputContainer from 'components/common/Form/inputs/InputContainer'
import Label from 'components/common/Label'

import { selectStyle } from 'styles'

interface SexInputProps {
    setSex: React.Dispatch<React.SetStateAction<string>>
}

export default function SexInput({ setSex }: SexInputProps) {

    const options = [
        ['m', 'Masculino'],
        ['f', 'Feminino']
    ]

    return (
        <InputContainer>
            <Label name='Sexo' />
            <select style={selectStyle} onChange={e => setSex(e.target.value)}>
                {options.map(option => {
                    return (
                        <option key={option[0]} value={option[0]}>{option[1]}</option>
                    )
                })}
            </select>
        </InputContainer>
    )
}