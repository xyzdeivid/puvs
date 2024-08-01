import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from 'UserInfo'

import { functions } from 'functions/user'

import { buttonStyle, mainColor, containerStyle } from 'styles'

import InfoBox from 'components/common/InfoBox'

export default function Info() {

    const user = useContext(UserContext)
    const [weight] = user.weight
    const [heightWrong] = user.height
    const height = heightWrong / 100
    const [age] = user.age
    const [exerciseLevel] = user.exerciseLevel
    const [sex] = user.sex

    // Funções utilizadas na página
    const functionsSource = functions(weight, height, age, exerciseLevel, sex)
    const imc = functionsSource.imcCalculator()
    const dailyCalorieExpenditure = functionsSource.dailyCalorieExpenditure()
    const water = functionsSource.waterCalculator()

    const circleStyle: React.CSSProperties = {
        width: '16px',
        height: '16px',
        boxShadow: `5px 5px 10px ${mainColor}`,
        position: 'absolute',
        top: '-26px',
        left: '-8px',
        borderRadius: '50%',
    }

    const navigate = useNavigate()

    return (
        <div style={containerStyle}>
            <div style={{ position: 'relative', marginBottom: '16px' }}>
                <div style={circleStyle}></div>
                <div>
                    <InfoBox index='IMC' text={imc} />
                    <InfoBox index='Estimativa de gasto calórico' text={`${dailyCalorieExpenditure}kcal`} />
                    <InfoBox index='Sugestão de consumo de água' text={`${water}ml`} />
                </div>
            </div>
            <div>
                <span>Crie sua dieta </span>
                <button onClick={() => navigate('/dietpage')} style={buttonStyle}>aqui!</button>
            </div>
        </div>
    )
}