import { type FormEvent, type FC, useRef } from "react";

interface Props {
    onAddGoal: (title: string, description: string) => void;
    disabled: boolean;
}

const NewGoal: FC<Props> = ({ onAddGoal, disabled }) => {
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const enteredGoal = goal.current!.value;
        const eneteredSummary = summary.current!.value;

        event.currentTarget.reset();
        onAddGoal(enteredGoal, eneteredSummary);
    }
    
    if (disabled) return <></>

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your goal</label>
                <input ref={goal} id="goal" type="text" />
            </p>
            <p>
                <label htmlFor="summary">SHort summary</label>
                <input ref={summary} id="summary" type="text" />
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>

    );
}

export default NewGoal;