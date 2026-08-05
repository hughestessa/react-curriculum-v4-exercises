// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug
//Tessa Hughes - Strict mode makes the code run twice instead of just once which helps you catch issues
//Because stict mode ran the code twice (mounted twice) there were two intervals running/firing every second.
//To fix, a cleanup using clearInterval was needed.
// clearInterval is needed so that the code 'stops' after the component is gone (unmounted).
// The correct behavior is strict mode now does the following:
// 1. Component mounts - interval starts
// 2. Component unmounts - interval is cleared
// 3. Component mounts - interval starts
