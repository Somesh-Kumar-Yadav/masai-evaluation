import {
	GET_ACTORS_DATA_FAILURE,
	GET_ACTORS_DATA_REQUEST,
	GET_ACTORS_DATA_SUCCESS,
	GET_MOVIES_DATA_FAILURE,
	GET_MOVIES_DATA_REQUEST,
	GET_MOVIES_DATA_SUCCESS,
} from "./actionTypes";

const initState = {
	movies: [],
	actors: [],
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
		case GET_ACTORS_DATA_REQUEST:
			return {
				...state,
			};
		case GET_ACTORS_DATA_SUCCESS:
			return {
				...state,
				actors: payload,
			};
		case GET_ACTORS_DATA_FAILURE:
			return {
				...state,
				actors: [],
			};
		default:
			return {
				...state,
			};
	}
};
