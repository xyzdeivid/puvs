import { carbohydrates } from 'foods'

import { selectStyle } from 'styles'

export default function CarboOptions() {

    return (
            <select style={selectStyle}>
                {carbohydrates.map(food => {
                    return (
                        <option>{food.name}</option>
                    )
                })}
            </select>
    )

}