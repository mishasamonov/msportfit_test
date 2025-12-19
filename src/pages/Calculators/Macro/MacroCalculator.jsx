import { useEffect, useState } from 'react';
import { calcMacros, goalModifiers } from '../../../utils/calcMacros';
import '../Calculators.scss';

function MacroCalculator({ baseTdee }) {
  const [tdee, setTdee] = useState(2200);
  const [goal, setGoal] = useState(1.0);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (baseTdee) {
      setTdee(baseTdee);
    }
  }, [baseTdee]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const macros = calcMacros(Number(tdee), Number(goal));
    setResult(macros);
  };

  return (
    <div className="calc-card">
      <form className="calc-card__form" onSubmit={handleSubmit}>
        <label>
          Ваш TDEE (ккал)
          <input type="number" value={tdee} onChange={(e) => setTdee(e.target.value)} min="1200" max="4500" required />
        </label>
        <label>
          Ваша ціль
          <select value={goal} onChange={(e) => setGoal(e.target.value)}>
            {goalModifiers.map((item) => (
              <option key={item.value} value={item.value}>{item.label}</option>
            ))}
          </select>
        </label>
        <button className="btn-primary" type="submit">Розрахувати</button>
      </form>

      <div className="calc-card__result">
        <h4>Результат</h4>
        {result ? (
          <div className="calc-card__macros">
            <div>
              <span>Калорії</span>
              <strong>{result.calories} ккал</strong>
            </div>
            <div>
              <span>Білки</span>
              <strong>{result.proteins} г</strong>
            </div>
            <div>
              <span>Жири</span>
              <strong>{result.fats} г</strong>
            </div>
            <div>
              <span>Вуглеводи</span>
              <strong>{result.carbs} г</strong>
            </div>
          </div>
        ) : (
          <p className="calc-card__hint">Введіть TDEE або використайте попередній розрахунок.</p>
        )}
      </div>
    </div>
  );
}

export default MacroCalculator;

