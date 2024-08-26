import { Food } from 'types'

interface InfoCardProps {
    food: Food
}

export default function InfoCard({ food }: InfoCardProps) {

    const infoCardStyle: React.CSSProperties = {
        backgroundColor: 'white',
        padding: '16px',
        position: 'absolute',
        border: '1px solid black'
    }

    return (
        <div style={infoCardStyle}>
            <ul>
                <li>Nome: {food.name}</li>
                <li>Carboidrato: {food.carbohydrate}g</li>
                <li>Proteína: {food.protein}g</li>
                <li>Gordura: {food.fat}</li>
                <li>Caloria: {food.calories}kcal</li>
            </ul>
        </div>
    )

}