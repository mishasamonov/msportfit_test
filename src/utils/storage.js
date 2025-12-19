const FAVORITES_KEY = 'msportfit_favorites';
const PLANS_KEY = 'msportfit_plans';

const safeParse = (value) => {
  try {
    return JSON.parse(value);
  } catch {
    return [];
  }
};

export function getFavorites() {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(FAVORITES_KEY);
  return data ? safeParse(data) : [];
}

export function addToFavorites(id) {
  const favorites = getFavorites();
  if (!favorites.includes(id)) {
    favorites.push(id);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
}

export function removeFromFavorites(id) {
  const favorites = getFavorites().filter((f) => f !== id);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export function isFavorite(id) {
  return getFavorites().includes(id);
}

export function getPlans() {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(PLANS_KEY);
  return data ? safeParse(data) : [];
}

export function addToPlan(id) {
  const plans = getPlans();
  if (!plans.includes(id)) {
    plans.push(id);
    localStorage.setItem(PLANS_KEY, JSON.stringify(plans));
  }
}

export function removeFromPlan(id) {
  const plans = getPlans().filter((p) => p !== id);
  localStorage.setItem(PLANS_KEY, JSON.stringify(plans));
}

export function isInPlan(id) {
  return getPlans().includes(id);
}


