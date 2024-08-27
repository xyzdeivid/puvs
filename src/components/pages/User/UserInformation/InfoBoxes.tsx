import { useContext } from 'react'

import { UserContext } from 'UserInfo'

import { functions } from 'functions/user'

import InfoBox from 'components/common/InfoBox'

const InfoBoxes = () => {

    const user = useContext(UserContext)
    const [weight] = user.weight
    const [heightWrong] = user.height
    const height = heightWrong / 100
    const [age] = user.age
    const [exerciseLevel] = user.exerciseLevel
    const [sex] = user.sex

    const functionsSource = functions(weight, height, age, exerciseLevel, sex)
    const imc = functionsSource.imcCalculator()
    const dailyCalorieExpenditure = functionsSource.dailyCalorieExpenditure()
    const water = functionsSource.waterCalculator()

    return (
        <div>
            <InfoBox index='IMC' text={imc} />
            <InfoBox index='Estimativa de gasto calórico' text={`${dailyCalorieExpenditure}kcal`} />
            <InfoBox index='Sugestão de consumo de água' text={`${water}ml`} />
        </div>
    )

}

export default InfoBoxes