import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";
import CountButton from "./CountButton";

export default function CountContainer({ count, setCount }) {
  return (
    <div className="button-container">
      <CountButton type="minus" setCount={setCount}/>
      <CountButton type="plus" setCount={setCount}/>
    </div>
  );
}
