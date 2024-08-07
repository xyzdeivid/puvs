interface food {
    name: string
    amount: number
    carbo: number
    prot: number
    fat: number
    calories: number
}

export type foods = food[]

export type StringSelectInputValues = [string, string][]