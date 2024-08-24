import InputContainer from 'components/common/Form/inputs/InputContainer'
import Label from 'components/common/Label'

import { selectStyle } from 'styles'

interface SourceInputProps {
    setSource: React.Dispatch<React.SetStateAction<string>>
}

export default function SourceInput({ setSource }: SourceInputProps) {

    function sourceHandler(value: string) {
        setSource(value)
    }

    return (
        <InputContainer>
            <Label name='Fonte' />
            <select onChange={e => sourceHandler(e.target.value)} style={selectStyle}>
                <option value='carbo'>Carboidrato</option>
                <option value='prot'>Proteína</option>
            </select>
        </InputContainer>
    )

}