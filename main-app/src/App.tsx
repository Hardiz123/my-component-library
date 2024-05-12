import { useState } from "react";
import "./App.css";

import {Input, Label, Button} from "hardiz-demo-library";

function App() {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Label />

      <div className="m-4 w-full">
        <div className='mb-10 flex gap-4'>
        <Input value={value} onChange={handleChange} placeholder="First Name" />
        <Input value={value} onChange={handleChange} placeholder="Last Name" />
        </div>
        <Button label="Submit" onClick={() => alert(value)} />
      </div>
    </>
  );
}

export default App;
