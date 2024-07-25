import { functions } from 'functions/user'

import { UserContext } from 'UserInfo'

import { containerStyle, mainGradiente } from 'styles'
import { useContext } from 'react'

export default function DietPage() {

    const user = useContext(UserContext)
    const [weight] = user.weight
    const [heightWrong] = user.height
    const height = heightWrong / 100
    const [age] = user.age
    const [exerciseLevel] = user.exerciseLevel
    const [sex] = user.sex

    const dailyCalorieExpenditure = functions(weight, height, age, exerciseLevel, sex).dailyCalorieExpenditure()

    const buttonStyle: React.CSSProperties = {
        border: 'none',
        background: mainGradiente,
        color: 'white',
        padding: '6px',
        fontWeight: 'bold',
        cursor: 'pointer',
        marginTop: '8px',
        borderRadius: '3px'
    }

    return (
        <div style={containerStyle}>
            <div>
                <h4>Gasto calórico: {dailyCalorieExpenditure}kcal</h4>
                <h4>Calorias da dieta: </h4>
            </div>
            <div>
                <button style={buttonStyle}>Adicionar Alimento</button>
            </div>
        </div>
    )
}