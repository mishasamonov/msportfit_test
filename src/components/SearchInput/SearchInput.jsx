import './SearchInput.scss';

function SearchInput({ value, onChange, placeholder = 'Пошук...' }) {
  return (
    <div className="search-input">
      <span className="search-input__icon">🔍</span>
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
    </div>
  );
}

export default SearchInput;


