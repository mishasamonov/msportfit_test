/**
 * Calculate BMR using Mifflin-St Jeor formula
 * @param {string} gender - 'male' or 'female'
 * @param {number} weight - Weight in kg
 * @param {number} height - Height in cm
 * @param {number} age - Age in years
 * @returns {number}
 */
export function calcBMR(gender, weight, height, age) {
  if (!weight || !height || !age) return 0

  if (gender === "male") {
    return Math.round(10 * weight + 6.25 * height - 5 * age + 5)
  } else {
    return Math.round(10 * weight + 6.25 * height - 5 * age - 161)
  }
}

/**
 * Activity level multipliers
 */
export const activityLevels = [
  { value: 1.2, label: "Сидячий спосіб життя (мало або немає вправ)" },
  { value: 1.375, label: "Легка активність (1-3 дні на тиждень)" },
  { value: 1.55, label: "Помірна активність (3-5 днів на тиждень)" },
  { value: 1.725, label: "Висока активність (6-7 днів на тиждень)" },
  { value: 1.9, label: "Дуже висока активність (фізична робота)" },
]

/**
 * Calculate TDEE (Total Daily Energy Expenditure)
 * @param {number} bmr - Basal Metabolic Rate
 * @param {number} activityMultiplier - Activity level multiplier
 * @returns {number}
 */
export function calcTDEE(bmr, activityMultiplier) {
  if (!bmr || !activityMultiplier) return 0
  return Math.round(bmr * activityMultiplier)
}
