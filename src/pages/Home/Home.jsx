import { Link } from 'react-router-dom';
import './Home.scss';

const infoCards = [
  { title: 'Персоналізовані програми', text: 'Виберіть мету та рівень, щоб отримати відповідний план.' },
  { title: 'Контроль харчування', text: 'Розраховуйте BMI, TDEE та макроси в одному місці.' },
  { title: 'Прогрес та результати', text: 'Стежте за виконанням тренувань та робіть нотатки.' },
];

function Home() {
  return (
    <div className="home">
      <section className="home__hero">
        <div className="container home__hero-inner">
          <p className="home__eyebrow">Ваш персональний помічник</p>
          <h1>Ласкаво просимо до <span>MSportFit</span></h1>
          <p className="home__subtitle">Ваш персональний помічник для ефективних тренувань та збалансованого харчування. Досягайте цілей швидше!</p>
          <div className="home__actions">
            <Link to="/programs" className="btn-primary">Тренувальні програми</Link>
            <Link to="/calculators" className="btn-secondary">Калькулятори харчування</Link>
          </div>
        </div>
      </section>

      <section className="home__info">
        <div className="container home__cards">
          {infoCards.map((card) => (
            <div key={card.title} className="home__card">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;


