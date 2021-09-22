import './styles.scss';

export const Counter = () => {
  return (
    <div>
      <div className="counter-wrapper">
        <button className="remove-btn">x</button>
        <div className="count-value">{props.countValue}</div>
        <div className="control">
          <button className="control-btn" onClick={props.handleDecrement}>
            -
          </button>
          <button className="control-btn" onClick={props.handlaReset}>
            Reset
          </button>
          <button className="control-btn" onClick={props.handleIncrement}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};
