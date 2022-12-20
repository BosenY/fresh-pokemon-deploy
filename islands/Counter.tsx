import { useState, useEffect } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  console.log(IS_BROWSER,1)
  const [count, setCount] = useState(props.start);
  useEffect(() => {
    console.log(IS_BROWSER,2)
    console.log(count)
  }, [count])
  return (
    <div>
      <p>{count}</p>
      <Button onClick={() => setCount(count - 1)}>-1</Button>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
    </div>
  );
}
