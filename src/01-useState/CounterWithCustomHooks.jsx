import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHooks = () => {
    const {counter, increment, decremet, reset} = useCounter();

    return (
    <>
        <h1>Counter with Hook: {counter}</h1>

        <hr />

        <button className="btn btn-primary" onClick={increment} >+1</button>
        <button className="btn btn-primary" onClick={reset}>Reset</button>
        <button className="btn btn-primary" onClick={decremet}>-1</button>
    </>
  )
}
