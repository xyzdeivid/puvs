export function functions(weight: number, height: number, age: number, exerciseLevel: number, sex: string) {
    return {

        imcCalculator: () => {
            const imc = (weight / height ** 2)
            switch (true) {
                case (imc >= 40):
                    return `${imc.toFixed(1)} (obesidade extrema)`
                case (imc >= 35 && imc <= 39.9):
                    return `${imc.toFixed(1)} (obesidade grau 2)`
                case (imc >= 30 && imc <= 34.9):
                    return `${imc.toFixed(1)} (obesidade grau 1)`
                case (imc >= 25 && imc <= 29.9):
                    return `${imc.toFixed(1)} (sobrepeso)`
                case (imc < 18.5):
                    return `${imc.toFixed(1)} (baixo peso)`
                default:
                    return `${imc.toFixed(1)} (peso adequado)`
            }
        },

        dailyCalorieExpenditure: () => {
            const maleRate = (88.36 + (13.4 * weight) + (4.8 * height * 100) - (5.7 * age)) * exerciseLevel
            const femaleRate = (447.6 + (9.2 * weight) + (3.1 * height * 100) - (4.3 * age)) * exerciseLevel
            return sex === 'm'
                ? Math.floor(maleRate)
                : Math.floor(femaleRate)
        },

        waterCalculator: () => {
            return Math.floor(weight * 35)
        }

    }
}