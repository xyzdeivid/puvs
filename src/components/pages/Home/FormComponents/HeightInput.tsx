import InputContainer from 'components/common/Form/inputs/InputContainer'
import Label from 'components/common/Label'

interface HeightInputProps {
    setHeight: React.Dispatch<React.SetStateAction<number>>
}

export default function HeightInput({ setHeight }: HeightInputProps) {

    const inputStyle: React.CSSProperties = {
        maxWidth: '50px',
        backgroundColor: '#EEEBEB',
        border: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
        textAlign: 'center'
    }

    return (
        <InputContainer>
            <Label name='Altura (cm)' />
            <input style={inputStyle} onChange={e => setHeight(Number(Number(e.target.value)))} type='number' required />
        </InputContainer>
    )
}