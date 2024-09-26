import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/CounterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-500 p-10 bg-gray-100 rounded-md">
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="mr-5 px-3 py-2 bg-green-500 rounded-md text-xl font-semibold"
        >
          increment by 5
        </button>

        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 bg-green-500 rounded-md text-xl font-semibold"
        >
          increment
        </button>

        <h1 className="text-3xl mx-10">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 bg-red-500 rounded-md text-xl font-semibold"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
