import InputContainer from 'components/common/Form/inputs/InputContainer'

import { selectStyle } from 'styles'

interface SourceInputProps {
    setSource: React.Dispatch<React.SetStateAction<string>>
}

const SourceInput = ({ setSource }: SourceInputProps) => {

    function sourceHandler(value: string) {
        setSource(value)
    }

    return (
        <InputContainer labelText='Fonte'>
            <select onChange={e => sourceHandler(e.target.value)} style={selectStyle}>
                <option value='carbo'>Carboidrato</option>
                <option value='prot'>Proteína</option>
            </select>
        </InputContainer>
    )

}

export default SourceInput