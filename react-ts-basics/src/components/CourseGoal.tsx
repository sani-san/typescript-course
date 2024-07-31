import { type FC, type ReactNode } from "react";

interface Props {
    title: string;
    id: number;
    onDelete: (id: number) => void;
    children: ReactNode;
}

const CourseGoal: FC<Props> = ({title, id, onDelete, children}) => {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    );
}

export default CourseGoal