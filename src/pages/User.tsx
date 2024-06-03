import { useContext } from 'react'
import { UserContext } from 'UserInfo'
import { mainColor, mainGradiente } from 'styles'
import { functions } from 'functions/user'

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

    const containerStyle: React.CSSProperties = {
        width: '100vw',
        height: '100vh',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const listStyle: React.CSSProperties = {
        background: mainGradiente,
        color: 'white',
        padding: '8px',
        borderRadius: '4px',
        marginBottom: '8px',
        position: 'relative',
        borderBottom: `1px solid ${mainColor}`,
    }

    const circleStyle: React.CSSProperties = {
        width: '16px',
        height: '16px',
        boxShadow: `5px 5px 10px ${mainColor}`,
        position: 'absolute',
        top: '-26px',
        left: '-8px',
        borderRadius: '50%',
    }

    return (
        <div style={containerStyle}>
            <div style={{ position: 'relative', marginBottom: '16px' }}>
                <div style={circleStyle}></div>
                <ul>
                    <li style={listStyle} key={1}><b>IMC:</b> {imc}</li>
                    <li style={listStyle} key={2}><b>Estimativa de gasto calórico:</b> {dailyCalorieExpenditure}kcal</li>
                    <li style={listStyle} key={3}><b>Sugestão de consumo de água:</b> {water}ml</li>
                </ul>
            </div>
        </div>
    )
}