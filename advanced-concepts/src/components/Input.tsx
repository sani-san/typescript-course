import { forwardRef, type ComponentPropsWithoutRef } from "react";

type Props = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement, Props>(function Input({ label, id, ...props}, ref) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} ref={ref} />
    </p>
  )
});

export default Input;