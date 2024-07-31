import { type Goal } from '../App';
import CourseGoal from './CourseGoal';
import { type FC } from "react"

interface Props {
    goals: Goal[];
    onDelete: (id: number) => void;
}

const CourseGoalList: FC<Props> = ({ goals, onDelete}) => {
    return(
        <ul>
        { goals?.map(goal => (
          <li key={goal.id}>
          <CourseGoal onDelete={onDelete} id={goal.id} title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
          </li>
        ))}
        </ul>
    )
}

export default CourseGoalList;