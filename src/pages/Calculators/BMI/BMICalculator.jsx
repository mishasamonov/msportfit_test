import { useState } from 'react';
import { calcBMI } from '../../../utils/calcBMI';
import '../Calculators.scss';

function BMICalculator() {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = calcBMI(Number(weight), Number(height));
    setResult(res);
  };

  return (
    <div className="calc-card">
      <form className="calc-card__form" onSubmit={handleSubmit}>
        <label>
          Зріст (см)
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} required min="50" max="250" />
        </label>
        <label>
          Вага (кг)
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required min="20" max="250" />
        </label>
        <button type="submit" className="btn-primary">Розрахувати</button>
      </form>
      <div className="calc-card__result">
        <h4>Результат</h4>
        {result ? (
          <div className="calc-card__result-box">
            <p className="calc-card__value">{result.value}</p>
            <p className="calc-card__label">{result.category}</p>
          </div>
        ) : (
          <p className="calc-card__hint">Введіть дані та натисніть &quot;Розрахувати&quot;</p>
        )}
      </div>
    </div>
  );
}

export default BMICalculator;


