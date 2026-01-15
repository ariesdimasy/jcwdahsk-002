import { useReducer } from "react"
import { counterReducer, initialState } from "../reducers/counterReducer"

export default function Small(){
    const [state, dispatch] = useReducer(counterReducer, initialState)


    return <div style={{ border: '2px solid red', padding: '10px' }}> 
    Small Component 
    Count: {state.count}
     <button onClick={() => dispatch({type: "decrement"})}> - </button>
     <button onClick={() => dispatch({type: "increment"})}> + </button>
    </div>
}