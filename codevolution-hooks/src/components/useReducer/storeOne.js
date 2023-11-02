import React, { useReducer } from 'react'

const initialState = 0

const reducer = (accumulatorState, actualValue) => {
	switch (actualValue) {
		case 'increment':
			return accumulatorState + 1
		case 'decrement':
			return accumulatorState - 1
		case 'reset':
			return initialState
		default:
			return accumulatorState
	}
}

export const CountContext = React.createContext({
	countState: initialState,
	countDispatch: () => {}
})


function StoreOneProvider({ children }) {
	const [count, dispatchFn] = useReducer(reducer, initialState)
	//if need another state, same actions in reducer.
	const [total, dispatchTotal] = useReducer(reducer, initialState) 

  const countValues = {
    countState: count, 
    countDispatch: dispatchFn,
		total,
		totalDispatch: dispatchTotal
  }
	console.log('STORE ONE RENDER')
	return (
		<CountContext.Provider value={countValues}>
				{children}
		</CountContext.Provider>
	)
}

export default StoreOneProvider