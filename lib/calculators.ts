export function calcBMI(weightKg: number, heightCm: number): { bmi: number; category: string } {
  const heightM = heightCm / 100
  const bmi = weightKg / (heightM * heightM)

  let category = ""
  if (bmi < 18.5) category = "Дефіцит ваги"
  else if (bmi < 25) category = "Норма"
  else if (bmi < 30) category = "Надлишкова вага"
  else category = "Ожиріння"

  return { bmi: Math.round(bmi * 10) / 10, category }
}

export function calcTDEE(
  gender: "male" | "female",
  weightKg: number,
  heightCm: number,
  age: number,
  activityLevel: number,
): { bmr: number; tdee: number } {
  let bmr: number
  if (gender === "male") {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5
  } else {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161
  }

  const tdee = bmr * activityLevel

  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
  }
}

export function calcMacros(
  tdee: number,
  goal: "gain" | "maintain" | "lose",
): { calories: number; proteins: number; fats: number; carbs: number } {
  let modifier = 1
  if (goal === "gain") modifier = 1.1
  else if (goal === "lose") modifier = 0.85

  const calories = Math.round(tdee * modifier)
  const proteinCals = calories * 0.3
  const fatCals = calories * 0.25
  const carbCals = calories * 0.45

  return {
    calories,
    proteins: Math.round(proteinCals / 4),
    fats: Math.round(fatCals / 9),
    carbs: Math.round(carbCals / 4),
  }
}
