import { Foods } from 'types'

interface FoodsListProps {
    dietFoods: Foods
}

export default function FoodsList({ dietFoods }: FoodsListProps) {

    const listStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between'
    }

    const infoStyle: React.CSSProperties = {
        fontWeight: 'bolder'
    }

    return (
        <div>
            <ul>
                {dietFoods.map(food => {
                    return (
                        <li style={listStyle} key={food.name}>
                            <span style={{ marginRight: '8px' }}>{food.name}</span>
                            <span style={infoStyle}>Info</span>
                        </li>
                    )
                })}
            </ul>
            <hr style={{ margin: '16px 0' }} />
        </div>
    )

}