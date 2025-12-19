import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import programs from '../../data/programs.json';
import Accordion from '../../components/Accordion/Accordion';
import Badge from '../../components/Badge/Badge';
import { addToFavorites, addToPlan, isFavorite, isInPlan, removeFromFavorites, removeFromPlan } from '../../utils/storage';
import './ProgramDetails.scss';

function ProgramDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const program = programs.find((p) => p.id === Number(id));

  const [favorite, setFavorite] = useState(false);
  const [inPlan, setInPlan] = useState(false);

  useEffect(() => {
    if (program) {
      setFavorite(isFavorite(program.id));
      setInPlan(isInPlan(program.id));
    }
  }, [program]);

  const weekAccordionItems = useMemo(() => {
    if (!program) return [];
    return program.weeks.map((week) => ({
      id: week.weekNumber,
      title: `Тиждень ${week.weekNumber}: ${week.title}`,
      content: (
        <ul className="program-details__days">
          {week.days.map((day) => (
            <li key={day.day}>
              <div className="program-details__day-title">День {day.day} — {day.focus}</div>
              <div className="program-details__exercise-list">{day.exercises.join(', ')}</div>
            </li>
          ))}
        </ul>
      ),
    }));
  }, [program]);

  if (!program) {
    return (
      <div className="container program-details__empty">
        Програма не знайдена.
        <button className="btn-secondary" onClick={() => navigate('/programs')} type="button">Повернутися</button>
      </div>
    );
  }

  const toggleFavorite = () => {
    if (favorite) {
      removeFromFavorites(program.id);
      setFavorite(false);
    } else {
      addToFavorites(program.id);
      setFavorite(true);
    }
  };

  const togglePlan = () => {
    if (inPlan) {
      removeFromPlan(program.id);
      setInPlan(false);
    } else {
      addToPlan(program.id);
      setInPlan(true);
    }
  };

  return (
    <div className="program-details">
      <div className="container program-details__header">
        <button className="program-details__back" type="button" onClick={() => navigate('/programs')}>
          ← Назад до каталогу
        </button>
        <div className="program-details__top">
          <div>
            <p className="program-details__eyebrow">{program.goal}</p>
            <h1>{program.title}</h1>
            <p className="program-details__subtitle">{program.shortDescription}</p>
            <div className="program-details__chips">
              <Badge label={program.goal} />
              <Badge label={program.level} tone="muted" />
              <Badge label={`${program.durationWeeks} тижнів`} />
            </div>
          </div>
          <div className="program-details__actions">
            <button className="btn-primary" type="button" onClick={togglePlan}>
              {inPlan ? 'У моєму плані' : 'Додати до мого плану'}
            </button>
            <button className="btn-secondary" type="button" onClick={toggleFavorite}>
              {favorite ? 'Видалити з обраного' : 'В обране'}
            </button>
          </div>
        </div>
      </div>

      <div className="container program-details__content">
        <div className="program-details__panel">
          <h3>Опис програми</h3>
          <p>{program.description}</p>
        </div>

        <div className="program-details__panel">
          <h3>Що вам потрібно</h3>
          <div className="program-details__equipment">
            {program.equipment.map((item) => (
              <Badge key={item} label={item} tone="muted" />
            ))}
          </div>
        </div>

        <div className="program-details__panel">
          <h3>Структура по тижнях</h3>
          <Accordion items={weekAccordionItems} />
        </div>
      </div>
    </div>
  );
}

export default ProgramDetails;


