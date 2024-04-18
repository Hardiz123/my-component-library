import "./App.css";
import {Button, Input, Dropdown, StandardInput, LoadingButton, Carousel} from "my-component-library"

function App() {


  return (
    <>
    <Button label="click me" />
    <Input />
    <Dropdown />
    <div className="w-40">
    <StandardInput />
    </div>
    <LoadingButton />
    <div className="m-4">
      <Carousel />
    </div>
    </>
  );
} 

export default App;
