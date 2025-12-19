const FAVORITES_KEY = "msportfit_favorites"
const PLANS_KEY = "msportfit_plans"

/**
 * Get favorites from localStorage
 * @returns {number[]}
 */
export function getFavorites() {
  if (typeof window === "undefined") return []
  try {
    const data = localStorage.getItem(FAVORITES_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

/**
 * Add item to favorites
 * @param {number} id
 */
export function addToFavorites(id) {
  const favorites = getFavorites()
  if (!favorites.includes(id)) {
    favorites.push(id)
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
  }
}

/**
 * Remove item from favorites
 * @param {number} id
 */
export function removeFromFavorites(id) {
  const favorites = getFavorites().filter((f) => f !== id)
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
}

/**
 * Check if item is in favorites
 * @param {number} id
 * @returns {boolean}
 */
export function isFavorite(id) {
  return getFavorites().includes(id)
}

/**
 * Get plans from localStorage
 * @returns {number[]}
 */
export function getPlans() {
  if (typeof window === "undefined") return []
  try {
    const data = localStorage.getItem(PLANS_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

/**
 * Add program to plans
 * @param {number} id
 */
export function addToPlan(id) {
  const plans = getPlans()
  if (!plans.includes(id)) {
    plans.push(id)
    localStorage.setItem(PLANS_KEY, JSON.stringify(plans))
  }
}

/**
 * Remove program from plans
 * @param {number} id
 */
export function removeFromPlan(id) {
  const plans = getPlans().filter((p) => p !== id)
  localStorage.setItem(PLANS_KEY, JSON.stringify(plans))
}

/**
 * Check if program is in plans
 * @param {number} id
 * @returns {boolean}
 */
export function isInPlan(id) {
  return getPlans().includes(id)
}
