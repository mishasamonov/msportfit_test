import { useNavigate, useParams } from 'react-router-dom';
import exercises from '../../data/exercises.json';
import Badge from '../../components/Badge/Badge';
import './ExerciseDetails.scss';

function ExerciseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const exercise = exercises.find((e) => e.id === Number(id));

  if (!exercise) {
    return (
      <div className="container exercise-details__empty">
        Вправа не знайдена.
        <button className="btn-secondary" onClick={() => navigate('/exercises')} type="button">Назад</button>
      </div>
    );
  }

  return (
    <div className="exercise-details">
      <div className="container">
        <button className="exercise-details__back" type="button" onClick={() => navigate('/exercises')}>
          ← Назад до каталогу
        </button>
      </div>

      <div className="exercise-details__video">
        <div className="exercise-details__video-placeholder">
          <div className="exercise-details__play">▶</div>
          <p>Відео демонстрація</p>
        </div>
      </div>

      <div className="container exercise-details__content">
        <div className="exercise-details__header">
          <div>
            <p className="exercise-details__eyebrow">Техніка</p>
            <h1>{exercise.title}</h1>
          </div>
          <div className="exercise-details__badges">
            <Badge label={exercise.muscleGroup} />
            <Badge label={exercise.equipment} tone="muted" />
            <Badge label={exercise.difficulty} />
          </div>
        </div>

        <div className="exercise-details__grid">
          <div className="exercise-details__panel">
            <h3>Важливі поради</h3>
            <ul>
              {exercise.tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>

          <div className="exercise-details__panel">
            <h3>Покрокова інструкція</h3>
            <ol>
              {exercise.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="exercise-details__panel">
            <h3>Рекомендовані параметри</h3>
            <div className="exercise-details__stats">
              <div><span>Підходи</span><strong>{exercise.recommended.sets}</strong></div>
              <div><span>Повторення</span><strong>{exercise.recommended.reps}</strong></div>
              <div><span>Відпочинок</span><strong>{exercise.recommended.restMin} хв</strong></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExerciseDetails;


