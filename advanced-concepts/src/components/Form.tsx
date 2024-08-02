import { type ComponentPropsWithoutRef, type FormEvent, useRef, useImperativeHandle, forwardRef } from "react";

type Props = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void;
}

export type FormHandle = {
  clear: () => void;
}

const Form = forwardRef<FormHandle, Props>(function Form({ onSave, children, ...props }, ref) {
  const form = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => {
    return {
      clear() {
        form.current?.reset();
      }
    }
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
  }

  return (
    <form onSubmit={handleSubmit} {...props} ref={form}>{children}</form>
  )
});

export default Form;