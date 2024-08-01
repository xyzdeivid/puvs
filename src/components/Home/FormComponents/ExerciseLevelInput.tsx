import InputContainer from 'components/common/Form/InputContainer'
import Label from 'components/common/Label'

import { selectStyle } from '../../../styles'

interface ExerciseLevelInputProps {
    setExerciseLevel: React.Dispatch<React.SetStateAction<number>>
}

export default function ExerciseLevelInput({ setExerciseLevel }: ExerciseLevelInputProps) {

    const options = [
        [1.2, 'Sedentário'],
        [1.375, 'Levemente Ativo'],
        [1.55, 'Moderamente Ativo'],
        [1.725, 'Muito Ativo'],
        [1.9, 'Extremamente Ativo']
    ]

    return (
        <InputContainer>
            <Label name='Nível de atividade física' />
            <select style={selectStyle} onChange={e => setExerciseLevel(Number(e.target.value))}>
                {options.map(option => {
                    return (
                        <option key={option[0]} value={option[0]}>{option[1]}</option>
                    )
                })}
            </select>
        </InputContainer>
    )
}