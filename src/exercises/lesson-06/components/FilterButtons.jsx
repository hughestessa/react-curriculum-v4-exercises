export default function FilterButtons({ currentFilter, onFilterChange }) {
  const filters = ['all', 'completed', 'pending'];

  return (
    <div>
      {filters.map((filterOption) => (
        <button
          key={filterOption}
          onClick={() => onFilterChange(filterOption)}
          style={{
            fontWeight: currentFilter === filterOption ? 'bold' : 'normal',
            textTransform: 'capitalize',
            marginRight: '5px',
          }}
        >
          {filterOption}
        </button>
      ))}
      <p>Current filter: {currentFilter}</p>
    </div>
  );
}
