import React, { useReducer } from 'react'

const initialState = {
	first: 1,
	second: 10
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return { ...state, first: state.first + action.value }
		case 'decrement':
			return { ...state, first: state.first - action.value }
		case 'increment2':
			return { ...state, second: state.second + (10 * action.value) }
		case 'decrement2':
			return { ...state, second: state.second - (10 * action.value) }
		case 'reset':
			return initialState
		default:
			return state
	}
}

export const CountContext = React.createContext({
	count: initialState,
	countFn: () => {}
})


function StoreTwoProvider({ children }) {
	const [count, dispatchFn] = useReducer(reducer, initialState)

  const countValues = {
    count: count, 
    countFn: dispatchFn
  }

	console.log('STORE TWO RENDER')
	return (
		<CountContext.Provider value={countValues}>
				{children}
		</CountContext.Provider>
	)
}

export default StoreTwoProvider