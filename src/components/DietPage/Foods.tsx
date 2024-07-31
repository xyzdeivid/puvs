import { foods } from 'types'

interface FoodsProps {
    foods: foods
}

export default function Foods({ foods }: FoodsProps) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Alimento</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    foods.map(food => {
                        return (
                            <tr>
                                <td>{food.name}</td>
                                <td>Info</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}