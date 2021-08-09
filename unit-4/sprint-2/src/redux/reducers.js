import {
	GET_MOVIES_DATA_FAILURE,
	GET_MOVIES_DATA_REQUEST,
	GET_MOVIES_DATA_SUCCESS,
} from "./actionTypes";

const initState = {
	movies: [],
};
export const reducers = (state = initState, { type, payload }) => {
	switch (type) {
		case GET_MOVIES_DATA_REQUEST:
			return {
				...state,
			};
		case GET_MOVIES_DATA_SUCCESS:
			return {
				...state,
				movies: payload,
			};
		case GET_MOVIES_DATA_FAILURE:
			return {
				...state,
				movies: [],
			};
		default:
			return {
				...state,
			};
	}
};
