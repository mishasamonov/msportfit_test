/**
 * Goal modifiers for calorie adjustment
 */
export const goalModifiers = [
  { value: 1.1, label: "Набір маси (+10%)" },
  { value: 1.0, label: "Підтримка (0%)" },
  { value: 0.85, label: "Схуднення (-15%)" },
]

/**
 * Calculate macronutrients based on TDEE and goal
 * @param {number} tdee - Total Daily Energy Expenditure
 * @param {number} goalModifier - Goal modifier (1.1, 1.0, or 0.85)
 * @returns {{ calories: number, proteins: number, fats: number, carbs: number }}
 */
export function calcMacros(tdee, goalModifier) {
  if (!tdee || !goalModifier) {
    return { calories: 0, proteins: 0, fats: 0, carbs: 0 }
  }

  const adjustedCalories = Math.round(tdee * goalModifier)

  // Macro distribution: 30% protein, 25% fat, 45% carbs
  const proteinCalories = adjustedCalories * 0.3
  const fatCalories = adjustedCalories * 0.25
  const carbCalories = adjustedCalories * 0.45

  // Convert to grams: protein/carbs = 4 kcal/g, fats = 9 kcal/g
  const proteins = Math.round(proteinCalories / 4)
  const fats = Math.round(fatCalories / 9)
  const carbs = Math.round(carbCalories / 4)

  return {
    calories: adjustedCalories,
    proteins,
    fats,
    carbs,
  }
}
