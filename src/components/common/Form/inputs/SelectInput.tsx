import InputContainer from 'components/common/Form/inputs/InputContainer'
import Label from 'components/common/Label'

interface SelectInputProps {
    labelText: string
    optionsName: string[][]
    setValue: React.Dispatch<React.SetStateAction<string>>
}

export default function SelectInput({ labelText, optionsName, setValue }: SelectInputProps) {

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
            <select style={selectStyle} onChange={e => setValue(e.target.value)}>
                {optionsName.map(option => {
                    return (
                        <option key={option[0]} value={option[0]}>
                            {option[1]}
                        </option>
                    )
                })}
            </select>
        </InputContainer>
    )

}