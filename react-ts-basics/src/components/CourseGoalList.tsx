import { type Goal } from '../App';
import CourseGoal from './CourseGoal';
import InfoBox from './InfoBox';
import { type ReactNode, type FC } from "react"

interface Props {
    goals: Goal[];
    onDelete: (id: number) => void;
}

const CourseGoalList: FC<Props> = ({ goals, onDelete}) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint"> 
        <p>You have no course goals.</p>
      </InfoBox>
    )
  }

  let warningBox: ReactNode;
  if (goals.length >= 4)
    warningBox = <InfoBox mode="warning" severity="medium">You are adding too many goals.</InfoBox>;
  if (goals.length == 6)
    warningBox = <InfoBox mode="warning" severity="high">You have added too many goals.</InfoBox>;

  return (
    <>
      { warningBox }
      <ul>
      { goals?.map(goal => (
        <li key={goal.id}>
        <CourseGoal onDelete={onDelete} id={goal.id} title={goal.title}>
          <p>{goal.description}</p>
        </CourseGoal>
        </li>
      ))}
      </ul>
    </>
  )
}

export default CourseGoalList;