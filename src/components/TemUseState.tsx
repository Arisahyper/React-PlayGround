import React, { useState } from 'react';

const addNum = (...num: number[]) => {
  let cnum: number = 0;
  for (let i in num) {
    cnum += num[i];
  }
  return cnum;
};

const TmpUseState = () => {
  const [inputData, setInputData] = useState<string>();
  const [counter, setCounter] = useState<number>(0);
  const [NumberList, setNumberList] = useState<number[]>([]);

  return (
    <div style={{ paddingTop: '5rem' }}>
      <input
        type="text"
        onChange={(e) => {
          setInputData(e.target.value);
        }}
      ></input>
      <h1>{inputData}</h1>

      <button
        onClick={() => {
          if (counter === 0) {
            setCounter(counter + 1);
            NumberList.push(counter);
          } else {
            setCounter(counter * 2);
            NumberList.push(counter);
          }
        }}
      >
        2倍してくボタン
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        リセットボタン
      </button>

      <h1>{counter}</h1>
    </div>
  );
};

export default TmpUseState;
