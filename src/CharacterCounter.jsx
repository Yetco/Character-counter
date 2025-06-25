import { useState } from "react";

function CharacterCounter() {
  const maxChar = 20;
  const [count, setCount] = useState("");

  function handleInput(e) {
    if (e.target.value.length <= maxChar) {
      // Update the state only if the input length is within the limit
      setCount(e.target.value);
    }
  }

  return (
    <div>
      <h1>Character Counter</h1>
      <input
        type="text"
        onChange={handleInput}
        value={count}
        placeholder="Type something..."
      />
      <p>
        {count.length} / {maxChar} Characters used
      </p>
      <p>{maxChar - count.length} Characters left</p>
    </div>
  );
}

export default CharacterCounter;
