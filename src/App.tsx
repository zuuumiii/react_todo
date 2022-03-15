import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" value="" onChange={(e) => e.preventDefault()} />
        <input
          type="submit"
          value="追加"
          onSubmit={(e) => e.preventDefault()}
        />
      </form>
    </div>
  );
};

export default App;
