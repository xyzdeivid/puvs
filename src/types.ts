export interface Food {
    name: string,
    amount?: number
    carbohydrate: number
    protein: number
    fat: number
    calories: number
}

export type Foods = Food[]