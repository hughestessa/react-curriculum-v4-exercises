// TOPIC: Correct useRef usage to control DOM elements
// TASK: Implement focusing an input field when the button is clicked.
import { useRef } from 'react';

export default function FillRefFocus() {
  const myRef = useRef(null);

  function focusInput() {
    myRef.current.focus();
  }

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input type="text" placeholder="Type here..." ref={myRef} />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

//ref={myRef} = connect the input to the ref
//myRef.current.focus() = focus that input
