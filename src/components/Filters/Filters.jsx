import './Filters.scss';

function Filters({ filters, options, onChange }) {
  const handleChange = (key, value) => {
    onChange({ ...filters, [key]: value });
  };

  return (
    <div className="filters">
      <div className="filters__block">
        <p className="filters__label">Група м&apos;язів</p>
        <div className="filters__chips">
          {['Усі', ...options.muscleGroups].map((item) => (
            <button
              key={item}
              type="button"
              className={`filters__chip ${filters.muscleGroup === item || (!filters.muscleGroup && item === 'Усі') ? 'filters__chip--active' : ''}`}
              onClick={() => handleChange('muscleGroup', item === 'Усі' ? '' : item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="filters__block">
        <p className="filters__label">Інвентар</p>
        <div className="filters__chips">
          {['Усі', ...options.equipment].map((item) => (
            <button
              key={item}
              type="button"
              className={`filters__chip ${filters.equipment === item || (!filters.equipment && item === 'Усі') ? 'filters__chip--active' : ''}`}
              onClick={() => handleChange('equipment', item === 'Усі' ? '' : item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="filters__block">
        <p className="filters__label">Складність</p>
        <div className="filters__chips">
          {['Усі', ...options.difficulty].map((item) => (
            <button
              key={item}
              type="button"
              className={`filters__chip ${filters.difficulty === item || (!filters.difficulty && item === 'Усі') ? 'filters__chip--active' : ''}`}
              onClick={() => handleChange('difficulty', item === 'Усі' ? '' : item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filters;


