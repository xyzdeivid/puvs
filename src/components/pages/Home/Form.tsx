import { useContext, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from 'UserInfo'

import PopUpContainer from 'components/common/PopUpContainer'
import FormStyle from 'components/common/Form/FormStyle'
import HeightInput from './FormComponents/HeightInput'
import WeightInput from './FormComponents/WeightInput'
import SexInput from './FormComponents/SexInput'
import AgeInput from './FormComponents/AgeInput'
import ExerciseLevelInput from './FormComponents/ExerciseLevelInput'
import ConfirmButton from 'components/common/Form/FormConfirmButton'

interface FormProps {
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>
}

const Form = ({ setShowForm }: FormProps) => {

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
        <PopUpContainer setShowForm={setShowForm}>
            <FormStyle>
                <form onSubmit={e => {
                    e.preventDefault()
                    navigate('/user')
                }}>
                    <div>
                        <HeightInput setHeight={setHeight} />
                        <WeightInput setWeight={setWeight} />
                        <SexInput setSex={setSex} />
                        <AgeInput setAge={setAge} />
                        <ExerciseLevelInput setExerciseLevel={setExerciseLevel} />
                    </div>
                    <ConfirmButton text='Verificar' />
                </form>
            </FormStyle>
        </PopUpContainer>
    )
}

export default Form