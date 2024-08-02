import { useRef } from "react";
import Button from "./components/Button"
import Input from "./components/Input"
import Container from "./components/Container";
import Form from "./components/Form";
import { FormHandle } from "./components/Form";

const App = () => {
  const input = useRef<HTMLInputElement>(null);
  const customForm = useRef<FormHandle>(null);
  

  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string, age: number };
    console.log(extractedData);
    customForm.current?.clear();
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="Name" id="name"></Input>
        <Input type="number" label="Age" id="age"></Input>
        <p>
          <Button el="button">Save</Button>
        </p>
      </Form>
      <Input id="name" label="Your Name" type="text" ref={input} />
      <Input id="age" label="Your Age" type="number" />
      <p>
        <Button el="button">A Button</Button>
        <Button el="anchor" href="https://google.com">A Button</Button>
      </p>
      <Container as={Button} el="button" onClick={() => {}} type="button">Click Timothy</Container>
    </main>
  )
}

export default App
