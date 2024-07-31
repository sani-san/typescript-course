import goalsImg from './assets/goals.jpg';
import Header from './components/Header';
import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList';
import NewGoal from './components/NewGoal';

export interface Goal {
  title: string;
  description: string;
  id: number;
}

const App = () => {
  const [goals, setGoals] = useState<Goal[]>([]);

  const handleAddGoal = (title: string, description: string) => {
    const newGoal: Goal = {
      id: Math.random(),
      title: title,
      description: description
    }
    setGoals(prev => ([...prev, newGoal]));
  }

  const handleDeleteGoal = (id: number) => {
    setGoals(prev => prev.filter(goal => goal.id !== id));
  }
  
  return (
    <main>
        <Header image={{ src: goalsImg, alt: "Timothy"}}>
          <h1>Your Course Goals</h1>
        </Header>
        <NewGoal onAddGoal={handleAddGoal} />
        <CourseGoalList onDelete={handleDeleteGoal} goals={goals} />
    </main>
  );
}

export default App;