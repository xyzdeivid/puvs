import { useContext, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from 'UserInfo'

import FormContainer from 'components/common/Form/FormContainer'
import FormStyle from 'components/common/Form/FormStyle'
import NumberInput from 'components/common/Form/NumberInput'
import SexInput from './FormComponents/SexInput'
import ExerciseLevelInput from './FormComponents/ExerciseLevelInput'
import ConfirmButton from 'components/common/Form/FormConfirmButton'

interface FormProps {
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Form({ setShowForm }: FormProps) {

    const user = useContext(UserContext)
    const [, setHeight] = user.height
    const [, setWeight] = user.weight
    const [, setSex] = user.sex
    const [, setAge] = user.age
    const [, setExerciseLevel] = user.exerciseLevel

    const setDefaultValues = useCallback(() => {
        setSex('m')
        setExerciseLevel(1.2)
    }, [setSex, setExerciseLevel])

    useEffect(() => {
        setDefaultValues()
    }, [setDefaultValues])

    const navigate = useNavigate()

    return (
        <FormContainer setShowForm={setShowForm}>
            <FormStyle>
                <form onSubmit={e => {
                    e.preventDefault()
                    navigate('/user')
                }}>
                    <div>
                        <NumberInput labelText='Altura (cm)' setValue={setHeight} />
                        <NumberInput labelText='Peso' setValue={setWeight} step='0.1' />
                        <SexInput setSex={setSex} />
                        <NumberInput labelText='Idade' setValue={setAge} />
                        <ExerciseLevelInput setExerciseLevel={setExerciseLevel} />
                    </div>
                    <ConfirmButton text='Verificar' />
                </form>
            </FormStyle>
        </FormContainer>
    )
}