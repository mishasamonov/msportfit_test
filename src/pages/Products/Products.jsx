import { useMemo, useState } from 'react';
import products from '../../data/products.json';
import SearchInput from '../../components/SearchInput/SearchInput';
import './Products.scss';

const categories = ['Всі', "М'ясо", 'Риба', 'Яйця', 'Молочні', 'Крупи', 'Овочі', 'Фрукти', 'Горіхи'];

function Products() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Всі');

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchCategory = category === 'Всі' ? true : product.category === category;
      const matchSearch = product.name.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [search, category]);

  return (
    <div className="products">
      <div className="container">
        <div className="products__header">
          <div>
            <p className="products__eyebrow">Довідник продуктів</p>
            <h2>Поживна цінність на 100 г</h2>
          </div>
          <SearchInput value={search} onChange={setSearch} placeholder="Пошук продукту..." />
        </div>

        <div className="products__tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`products__tab ${category === cat ? 'products__tab--active' : ''}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="products__table">
          <div className="products__row products__row--head">
            <span>Назва</span>
            <span>Категорія</span>
            <span>Ккал</span>
            <span>Білки</span>
            <span>Жири</span>
            <span>Вугл.</span>
          </div>
          {filtered.map((product) => (
            <div key={product.id} className="products__row">
              <span>{product.name}</span>
              <span>{product.category}</span>
              <span className="products__number">{product.calories}</span>
              <span className="products__number">{product.proteins}</span>
              <span className="products__number">{product.fats}</span>
              <span className="products__number">{product.carbs}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;


