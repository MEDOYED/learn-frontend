import { useState } from "react";

import s from "./SectionCounter.module.scss";

const SectionCounter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <section>
      <h2>Section Counter</h2>

      <div className={s.count}>{count}</div>

      <button
        className={s.button}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
      <button
        className={s.button}
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -1
      </button>
      <button
        className={s.button}
        onClick={() => {
          setCount(0);
        }}
      >
        C
      </button>
    </section>
  );
};

export default SectionCounter;
