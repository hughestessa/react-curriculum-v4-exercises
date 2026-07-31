export default function Child({ passFunction }) {
  return (
    <button
      onClick={() => {
        passFunction();
      }}
    >
      Increment Counter
    </button>
  );
}
