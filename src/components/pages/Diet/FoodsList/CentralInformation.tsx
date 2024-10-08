import { useContext } from 'react'

import { Foods } from 'types'

import { UserContext } from 'UserInfo'

interface CentralInformationProps {
    dietFoods: Foods
}

const CentralInformation = ({ dietFoods }: CentralInformationProps) => {

    const user = useContext(UserContext)
    const [weight] = user.weight

    const carboCounter = () => {
        const totalCarbo = dietFoods.reduce((acc, current) => {
            return acc + current.carbohydrate
        }, 0)
        return totalCarbo.toFixed(1)
    }

    const gkgCarboCounter = () => {
        const gkgNumber = Number(carboCounter()) / weight
        return gkgNumber
            ? gkgNumber.toFixed(1)
            : '0'
    }

    const protCounter = () => {
        const totalProt = dietFoods.reduce((acc, current) => {
            return acc + current.protein
        }, 0)
        return totalProt.toFixed(1)
    }

    const gkgProtCounter = () => {
        const gkgNumber = Number(protCounter()) / weight
        return gkgNumber
            ? gkgNumber.toFixed(1)
            : '0'
    }

    const fatCounter = () => {
        const totalFat = dietFoods.reduce((acc, current) => {
            return acc + current.fat
        }, 0)
        return totalFat.toFixed(1)
    }

    const gkgFatCounter = () => {
        const gkgNumber = Number(fatCounter()) / weight
        return gkgNumber
            ? gkgNumber.toFixed(1)
            : '0'
    }

    const caloriesCounter = () => {
        const totalCalories = dietFoods.reduce((acc, current) => {
            return acc + current.calories
        }, 0)
        return totalCalories
    }

    return (
        <ul style={{ fontSize: '14px' }}>
            <li><b>Carboidratos totais (g):</b> {carboCounter()} ({gkgCarboCounter()}g/kg)</li>
            <li><b>Proteínas totais (g):</b> {protCounter()} ({gkgProtCounter()}g/kg)</li>
            <li><b>Gorduras totais (g):</b> {fatCounter()} ({gkgFatCounter()}g/kg)</li>
            <li><b>Calorias totais:</b> {caloriesCounter()}kcal</li>
        </ul>
    )

}

export default CentralInformation