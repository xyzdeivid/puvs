interface food {
    name: string
    carbohydrate: number
    protein: number
    fat: number
    calories: number
}

export const carbohydrates: food[] = [

    {
        name: 'Arroz Branco (Cozido)',
        carbohydrate: 0.28,
        protein: 0.02,
        fat: 0.002,
        calories: 1.3
    },

    {
        name: 'Feijão Preto (Cozido)',
        carbohydrate: 0.16,
        protein: 0.06,
        fat: 0.003,
        calories: 0.9
    },

    {
        name: 'Batata Inglesa (Cozida)',
        carbohydrate: 0.18,
        protein: 0.02,
        fat: 0.001,
        calories: 0.77
    },

    {
        name: 'Batata Doce (Cozida)',
        carbohydrate: 0.20,
        protein: 0.01,
        fat: 0.002,
        calories: 0.86
    },

    {
        name: 'Mandioca (Cozida)',
        carbohydrate: 0.36,
        protein: 0.01,
        fat: 0.003,
        calories: 1.5
    },

    {
        name: 'Banana Prata',
        carbohydrate: 0.23,
        protein: 0.011,
        fat: 0.001,
        calories: 0.89
    }

]