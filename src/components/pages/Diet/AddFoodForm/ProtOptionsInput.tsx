import { proteins } from 'foods'

import { selectStyle } from 'styles'

export default function ProtOptionsInput() {

    return (
            <select style={selectStyle}>
                {proteins.map(food => {
                    return (
                        <option>{food.name}</option>
                    )
                })}
            </select>
    )

}