import React, { useState } from 'react';

export const HookCountContainer = () => {
  const [counterList, setCounterList] = useState([{ counterValue: 0 }]);

  //   const totalCounters = counterList.length;

  // useMemo (use for static values)
  const totalCounters = useMemo(() => counterList.length, [counterList]);

  const totalValue = useMemo(() => {
    return counterList.reduce(
      (initial, counter) => (initial += counter.counterValue),
      0
    );
  }, [counterList]);

  const handleIncrement = useCallback(
    (index) => {
      const updatedState = counterList.map((counter, countIndex) => {
        if (countIndex === index) {
          counter.counterValue++;
        }
        return counter;
      });
      setCounterList(updatedState);
    },
    [counterList]
  );

  const handleDecrement = useCallback(
    (index) => {
      const updatedState = counterList.map((counter, countIndex) => {
        if (countIndex === index && counter.counterValue > 0) {
          counter.counterValue--;
        }
        return counter;
      });
      setCounterList(updatedState);
    },
    [counterList]
  );

  const handleReset = useCallback(
    (index) => {
      const updatedState = counterList.map((counter, countIndex) => {
        if (countIndex === index) {
          counter.counterValue = 0;
        }
        return counter;
      });
      setCounterList(updatedState);
    },
    [counterList]
  );

  const handleRemoveCounter = useCallback(
    (index) => {
      const stateCopy = [...counterList];
      stateCopy.splice(index, 1);
      setCounterList(stateCopy);
    },
    [counterList]
  );

  const handleAddCounter = useCallback(() => {
    const stateCopy = [...counterList];
    stateCopy.push({ counterValue: 0 });
    setCounterList(stateCopy);
  }, [counterList]);

  const handleDestroyCounters = useCallback(() => {
    const stateCopy = [...counterList];
    stateCopy.splice(0);
    setCounterList(stateCopy);
  }, [counterList]);

  return (
    <CountersPage
      counters={counterList}
      totalValue={totalValue}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleReset={handleReset}
      handleRemoveCounter={handleRemoveCounter}
      handleAddCounter={handleAddCounter}
      handleDestroyCounters={handleDestroyCounters}
    />
  );
  //   return;
};
