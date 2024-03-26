import { useEffect, useState } from "react";
import Count from "./count";
import CountContainer from "./CountContainer";
import Resetbutton from "./resetbutton";
import Title from "./title";

export default function Card() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === "ArrowUp") {
        setCount(count + 1);
      }
      else if (event.code === "ArrowDown") {
        const newCount = count - 1;
        if(newCount < 0){
          setCount(0)
          return
        }
        setCount(newCount);
      }
      
      else if (event.code === "KeyR") {
        setCount(0);
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [count]);

  return (
    <div className="card">
      <Title />
      <Count count={count} />
      <Resetbutton setCount={setCount} />
      <CountContainer count={count} setCount={setCount} />
    </div>
  );
}
