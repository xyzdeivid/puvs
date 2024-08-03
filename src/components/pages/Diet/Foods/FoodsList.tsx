import { foods } from 'types'

interface DietFoodsProps {
    foods: foods
}

export default function DietFoods({ foods }: DietFoodsProps) {

    const listStyle: React.CSSProperties = {
        display: 'flex', 
        justifyContent: 'space-between'
    }

    const buttonStyle: React.CSSProperties = {
        fontWeight: 'bold',
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer'
    }

    return (
        <ul>
            {foods.map(food => {
                return (
                    <li style={listStyle}>
                        <span>{food.name}</span>
                        <button style={buttonStyle}>Info</button>
                    </li>
                )
            })}
        </ul>
    )

}