import { Food } from 'types'

import InputContainer from 'components/common/Form/inputs/InputContainer'
import CarboOptionsInput from './FoodOptionsInput/CarboOptionsInput'
import ProtOptionsInput from './FoodOptionsInput/ProtOptionsInput'

interface FoodOptionsInputProps {
    source: string
    setDefaultFood: (food: Food) => void
    setFood: React.Dispatch<React.SetStateAction<Food>>
}

const FoodOptionsInput = ({ source, setDefaultFood, setFood }: FoodOptionsInputProps) => {

    function sourceHandler() {
        if (source === 'carbo') {
            return <CarboOptionsInput setDefaultFood={setDefaultFood} setFood={setFood} />
        }
        if (source === 'prot') {
            return <ProtOptionsInput setDefaultFood={setDefaultFood} setFood={setFood} />
        }
    }

    return (
        <InputContainer labelText='Alimento'>
            {sourceHandler()}
        </InputContainer>
    )
    
}

export default FoodOptionsInput