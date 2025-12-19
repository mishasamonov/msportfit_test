import { Link } from 'react-router-dom';
import Badge from '../Badge/Badge';
import './ProgramCard.scss';

function ProgramCard({ program }) {
  return (
    <Link to={`/programs/${program.id}`} className="program-card">
      <div className="program-card__header">
        <h3>{program.title}</h3>
        <Badge label={program.goal} tone="accent" />
      </div>
      <p className="program-card__description">{program.shortDescription}</p>
      <div className="program-card__meta">
        <span>Рівень: {program.level}</span>
        <span>Тривалість: {program.durationWeeks} тижнів</span>
      </div>
    </Link>
  );
}

export default ProgramCard;


