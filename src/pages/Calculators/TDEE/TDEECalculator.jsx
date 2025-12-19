import { useState } from 'react';
import { activityLevels, calcBMR, calcTDEE } from '../../../utils/calcTDEE';
import '../Calculators.scss';

function TDEECalculator({ onTdeeChange }) {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState(25);
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(70);
  const [activity, setActivity] = useState(1.55);
  const [result, setResult] = useState({ bmr: 0, tdee: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    const bmr = calcBMR(gender, Number(weight), Number(height), Number(age));
    const tdee = calcTDEE(bmr, Number(activity));
    setResult({ bmr, tdee });
    onTdeeChange?.(tdee);
  };

  return (
    <div className="calc-card">
      <form className="calc-card__form" onSubmit={handleSubmit}>
        <label>
          Стать
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Чоловік</option>
            <option value="female">Жінка</option>
          </select>
        </label>
        <label>
          Вік
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} min="12" max="90" required />
        </label>
        <label>
          Зріст (см)
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} min="100" max="230" required />
        </label>
        <label>
          Вага (кг)
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} min="30" max="200" required />
        </label>
        <label>
          Рівень активності
          <select value={activity} onChange={(e) => setActivity(e.target.value)}>
            {activityLevels.map((level) => (
              <option key={level.value} value={level.value}>{level.label}</option>
            ))}
          </select>
        </label>
        <button className="btn-primary" type="submit">Розрахувати</button>
      </form>
      <div className="calc-card__result">
        <h4>Результат</h4>
        {result.tdee ? (
          <div className="calc-card__result-box">
            <p className="calc-card__label">BMR</p>
            <p className="calc-card__value">{result.bmr} ккал</p>
            <p className="calc-card__label">TDEE</p>
            <p className="calc-card__value">{result.tdee} ккал</p>
          </div>
        ) : (
          <p className="calc-card__hint">Заповніть поля та натисніть &quot;Розрахувати&quot;</p>
        )}
      </div>
    </div>
  );
}

export default TDEECalculator;


