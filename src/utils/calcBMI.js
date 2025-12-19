export function calcBMI(weight, height) {
  if (!weight || !height || weight <= 0 || height <= 0) {
    return { value: 0, category: '' };
  }

  const heightM = height / 100;
  const bmi = weight / (heightM * heightM);
  const value = Math.round(bmi * 10) / 10;

  let category = '';
  if (bmi < 18.5) {
    category = 'Дефіцит ваги';
  } else if (bmi < 25) {
    category = 'Норма';
  } else if (bmi < 30) {
    category = 'Надлишкова вага';
  } else {
    category = 'Ожиріння';
  }

  return { value, category };
}


