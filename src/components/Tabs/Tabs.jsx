import './Tabs.scss';

function Tabs({ tabs, value, onChange }) {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          className={`tabs__item ${value === tab.value ? 'tabs__item--active' : ''}`}
          onClick={() => onChange(tab.value)}
          type="button"
        >
          {tab.icon && <span className="tabs__icon">{tab.icon}</span>}
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default Tabs;


