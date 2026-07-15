export default function SnackList() {
  const snacks = [
    { name: 'Mini Chocolate Cupcakes', rank: '5' },
    { name: 'Cheese & Crackers', rank: '4' },
    { name: 'Cheez-its', rank: '3' },
    { name: 'Brownies', rank: '2' },
    { name: 'Watermelon', rank: '1' },
  ];
  const snacksSorted = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <div>
      {/* add JSX here */}
      <ol>
        {snacksSorted.map((snack) => (
          <li key={snack.rank}>{snack.name}</li>
        ))}
      </ol>
    </div>
  );
}
