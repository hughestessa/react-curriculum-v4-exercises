import { useState } from 'react';
import UserProfile from './components/UserProfile';
import FilterButtons from './components/FilterButtons';
import TaskList from './components/TaskList';
import { useFetchTasks } from './hooks/useTasks';
import { filterTasks } from './utils/helpers';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');

  const { tasks, loading } = useFetchTasks();

  const visibleTasks = filterTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <UserProfile name="Student" />
      <FilterButtons currentFilter={filter} onFilterChange={setFilter} />
      <TaskList tasks={visibleTasks} />
    </div>
  );
}
