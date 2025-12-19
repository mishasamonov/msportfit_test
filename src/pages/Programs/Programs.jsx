import programs from '../../data/programs.json';
import ProgramCard from '../../components/ProgramCard/ProgramCard';
import './Programs.scss';

function Programs() {
  return (
    <div className="programs">
      <div className="container">
        <div className="programs__header">
          <p className="programs__eyebrow">Каталог</p>
          <h2>Тренувальні програми</h2>
          <p className="programs__subtitle">Оберіть програму відповідно до ваших цілей та рівня підготовки.</p>
        </div>
        <div className="programs__grid">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Programs;


