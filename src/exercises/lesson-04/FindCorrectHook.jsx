// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useRef, useState } from 'react';

export default function FindCorrectHook() {
  let ref = useRef(0);
  const [clickCount, setclickCount] = useState(0);

  function handleClick() {
    ref.current = ref.current + 1;
    setclickCount(ref.current);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{clickCount} Clicks</button>
    </div>
  );
}

//Tessa Hughes
//These instructions don't make sense.
// To update a value WITHOUT re-render I could use useRef, BUT I can't show the updated click count value this way.
// To update a value and display it, I could use useState, BUT I can't do that without re-rendering!?
