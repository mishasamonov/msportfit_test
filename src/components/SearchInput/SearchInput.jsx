import './SearchInput.scss';

function SearchInput({ value, onChange, placeholder = 'Пошук...' }) {
  return (
    <div className="search-input">
      <label htmlFor="search-input" className="search-input__label">Пошук</label>
      <span className="search-input__icon">🔍</span>
      <input id="search-input" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
    </div>
  );
}

export default SearchInput;


