import { selectStyle } from 'styles'

import InputContainer from 'components/common/Form/inputs/InputContainer'

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
        <InputContainer labelText='Nível de atividade física'>
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