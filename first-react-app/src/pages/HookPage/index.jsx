export const CountersPage = ({
  counters,
  totalValue,
  handleIncrement,
  handleDecrement,
  handleReset,
  handleRemoveCounter,
  handleDestroyCounters,
}) => {
  <div>
    <h1>Hook Counters Page</h1>
    <Link>
      <button className="return-btn">Get back</button>
    </Link>
    <div>
      <button className="add-btn">Add counter</button>
      <button className="remove-btn">Remove All Counters</button>
      <h2>Total counters: {totalCounters}</h2>
      <h2>Total value: {totalValue}</h2>
    </div>
  </div>;
  {
    counters.map((counter, index) => {
      return (
        <div>
          <Counter
            countValue={counter.counterValue}
            handleIncrement={() => handleIncrement(index)}
            handleDecrement={() => handleDecrement(index)}
          />
        </div>
      );
    });
  }
};
