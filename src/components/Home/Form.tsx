import { useContext, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../UserInfo'

import NumberInput from './FormComponents/NumberInput'
import SexInput from './FormComponents/SexInput'
import ExerciseLevelInput from './FormComponents/ExerciseLevelInput'
import ConfirmButton from './FormComponents/ConfirmButton'

import { closeForm } from 'functions/form'

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

    const formRef = useRef(null)

    const setDefaultValues = useCallback(() => {
        setSex('m')
        setExerciseLevel(1.2)
    }, [setSex, setExerciseLevel])

    useEffect(() => {
        setDefaultValues()
    }, [setDefaultValues])

    const navigate = useNavigate()

    const container: React.CSSProperties = {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh'
    }

    const formStyle: React.CSSProperties = {
        backgroundColor: 'white',
        padding: '16px 48px 16px 16px',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)',
        position: 'relative',
        margin: '16px',
        borderRadius: '8px'
    }

    return (
        <div
            ref={formRef}
            onClick={e => closeForm(e, formRef, setShowForm)}
            style={container}>
            <div style={formStyle}>
                <form onSubmit={e => {
                    e.preventDefault()
                    navigate('/user')
                }}>
                    <div>
                        <NumberInput name='Altura (cm)' setValue={setHeight} />
                        <NumberInput name='Peso' setValue={setWeight} step='0.1' />
                        <SexInput setSex={setSex} />
                        <NumberInput name='Idade' setValue={setAge} />
                        <ExerciseLevelInput setExerciseLevel={setExerciseLevel} />
                    </div>
                    <ConfirmButton />
                </form>
            </div>
        </div>
    )
}