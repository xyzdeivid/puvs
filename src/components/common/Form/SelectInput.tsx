import InputContainer from 'components/common/Form/InputContainer'
import Label from 'components/common/Label'

interface SelectInputProps {
    labelText: string
    optionsName: string[]
}

export default function SelectInput({ labelText, optionsName }: SelectInputProps) {

    const selectStyle: React.CSSProperties = {
        border: 'none',
        textAlign: 'center',
        backgroundColor: '#EEEBEB',
        padding: '2px',
        borderRadius: '1px'
    }

    return (
        <InputContainer>
            <Label name={labelText} />
            <select style={selectStyle}>
                {optionsName.map(option => {
                    return (
                        <option>{option}</option>
                    )
                })}
            </select>
        </InputContainer>
    )

}