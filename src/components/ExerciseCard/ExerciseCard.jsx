import { Link } from 'react-router-dom';
import Badge from '../Badge/Badge';
import './ExerciseCard.scss';

function ExerciseCard({ exercise }) {
  return (
    <Link to={`/exercises/${exercise.id}`} className="exercise-card">
      <div className="exercise-card__top">
        <h3 role="heading" aria-level="2">{exercise.title}</h3>
        <Badge label={exercise.muscleGroup} />
      </div>
      <p className="exercise-card__description">{exercise.shortDescription}</p>
      <div className="exercise-card__meta">
        <Badge label={exercise.equipment} tone="muted" />
        <Badge label={exercise.difficulty} tone="accent" />
      </div>
    </Link>
  );
}

export default ExerciseCard;


