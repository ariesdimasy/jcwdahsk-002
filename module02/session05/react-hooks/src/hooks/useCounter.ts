import React from "react";

function useCounter(initialValue: number = 0, step: number = 1) {
    const [count, setCount] = React.useState(initialValue)

    const increment = () => setCount(count + step)
    const decrement = () => setCount(count - step)
    const reset = () => setCount(initialValue)

    return { count, increment, decrement, reset }
}

export default useCounter