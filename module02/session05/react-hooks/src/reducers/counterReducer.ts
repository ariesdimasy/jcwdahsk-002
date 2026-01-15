
type IState = {
    count: number
}

type Action = { type: "increment" } | { type: "decrement" }

const initialState: IState = {
    count: 0
}

export function counterReducer(state: IState, action: Action): IState {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 }
        case "decrement":
            return { count: state.count - 1 }
        default:
            return state
    }
}

export { initialState }