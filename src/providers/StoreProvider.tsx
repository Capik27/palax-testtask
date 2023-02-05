import { createContext, useReducer, useState } from "react";

export const StoreCtx = createContext({});

const initialState = {
	total: 0,
};

function reducer(state: any, action: any) {
	switch (action.type) {
		case "ADD_ITEM": {
			if (!state[`${action.payload}`]) {
				return Object.assign(
					{},
					state,
					{ [`${action.payload}`]: 1 },
					{
						total: state.total + 1,
					}
				);
			} else {
				console.log(action.payload, "already in cart");
			}
			return state;
		}

		case "ADD_COUNT": {
			if (state[action.payload] !== undefined) {
				return Object.assign(
					{},
					state,
					{ [action.payload]: state[action.payload] + 1 },
					{ total: state.total + 1 }
				);
			} else {
				console.log(action.payload, "not in cart");
			}
			return state;
		}
		default:
			throw new Error();
	}
}

export const StoreProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<StoreCtx.Provider value={{ state, dispatch }}>
			{children}
		</StoreCtx.Provider>
	);
};
