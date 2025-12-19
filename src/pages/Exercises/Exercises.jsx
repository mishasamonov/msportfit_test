import { useMemo, useState } from 'react';
import exercises from '../../data/exercises.json';
import ExerciseCard from '../../components/ExerciseCard/ExerciseCard';
import Filters from '../../components/Filters/Filters';
import SearchInput from '../../components/SearchInput/SearchInput';
import './Exercises.scss';

const options = {
  muscleGroups: [...new Set(exercises.map((e) => e.muscleGroup))],
  equipment: [...new Set(exercises.map((e) => e.equipment))],
  difficulty: [...new Set(exercises.map((e) => e.difficulty))],
};

function Exercises() {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ muscleGroup: '', equipment: '', difficulty: '' });

  const filteredExercises = useMemo(() => {
    return exercises.filter((exercise) => {
      const matchesSearch = exercise.title.toLowerCase().includes(search.toLowerCase());
      const matchesMuscle = filters.muscleGroup ? exercise.muscleGroup === filters.muscleGroup : true;
      const matchesEquipment = filters.equipment ? exercise.equipment === filters.equipment : true;
      const matchesDifficulty = filters.difficulty ? exercise.difficulty === filters.difficulty : true;
      return matchesSearch && matchesMuscle && matchesEquipment && matchesDifficulty;
    });
  }, [search, filters]);

  return (
    <div className="exercises">
      <div className="container">
        <div className="exercises__header">
          <div>
            <p className="exercises__eyebrow">Каталог</p>
            <h1>Вправи</h1>
            <p className="exercises__subtitle">Фільтруйте за м&apos;язами, обладнанням або складністю.</p>
          </div>
          <SearchInput value={search} onChange={setSearch} placeholder="Пошук вправи..." />
        </div>

        <div className="exercises__layout">
          <div className="exercises__filters">
            <Filters filters={filters} options={options} onChange={setFilters} />
          </div>
          <div className="exercises__list">
            {filteredExercises.map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exercises;


