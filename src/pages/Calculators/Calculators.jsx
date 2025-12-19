import { useState } from 'react';
import Tabs from '../../components/Tabs/Tabs';
import BMICalculator from './BMI/BMICalculator';
import TDEECalculator from './TDEE/TDEECalculator';
import MacroCalculator from './Macro/MacroCalculator';
import './Calculators.scss';

const tabList = [
  { value: 'bmi', label: 'BMI' },
  { value: 'tdee', label: 'TDEE' },
  { value: 'macro', label: 'Макро' },
];

function Calculators() {
  const [activeTab, setActiveTab] = useState('bmi');
  const [latestTdee, setLatestTdee] = useState(null);

  return (
    <div className="calculators">
      <div className="container calculators__header">
        <div>
          <p className="calculators__eyebrow">Інструменти</p>
          <h2>Калькулятори</h2>
          <p className="calculators__subtitle">Розрахуйте свої показники для ефективного харчування.</p>
        </div>
        <Tabs tabs={tabList} value={activeTab} onChange={setActiveTab} />
      </div>

      <div className="container calculators__body">
        {activeTab === 'bmi' && <BMICalculator />}
        {activeTab === 'tdee' && <TDEECalculator onTdeeChange={setLatestTdee} />}
        {activeTab === 'macro' && <MacroCalculator baseTdee={latestTdee} />}
      </div>
    </div>
  );
}

export default Calculators;


