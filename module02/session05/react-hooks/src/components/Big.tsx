
import { useReducer } from "react"
import { counterReducer, initialState } from "../reducers/counterReducer"
import Medium from "./Medium"

export default function Big(){
    
    const [state, dispatch] = useReducer(counterReducer, initialState)

    return <div style={{ border: '2px solid blue', padding: '10px' }}> 
    Big Component 
    Count: {state.count}
    <button onClick={() => dispatch({type: "decrement"})}> - </button>
    <button onClick={() => dispatch({type: "increment"})}> + </button>
    <Medium  />
    </div>
}