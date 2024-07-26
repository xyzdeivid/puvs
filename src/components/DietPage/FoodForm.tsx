import foodsOptions from 'foods'

export default function FoodForm() {
    return (
        <div>
            <h1>Escolha seu alimento</h1>
            <div>
                <label>Carboidratos</label>
                <select>
                    {foodsOptions[0].map(food => {
                        return <option>{food.name}</option>
                    })}
                </select>
                <label>Quantidade</label>
                <input type='number' />
            </div>
            <div>
                <label>Proteínas</label>
                <select>
                    {foodsOptions[1].map(food => {
                        return <option>{food.name}</option>
                    })}
                </select>
                <label>Quantidade</label>
                <input type='number' />
            </div>
        </div>
    )
}