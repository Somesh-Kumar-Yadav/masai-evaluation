import axios from "axios";
import {
	GET_ACTORS_DATA_FAILURE,
	GET_ACTORS_DATA_REQUEST,
	GET_ACTORS_DATA_SUCCESS,
	GET_MOVIES_DATA_FAILURE,
	GET_MOVIES_DATA_REQUEST,
	GET_MOVIES_DATA_SUCCESS,
} from "./actionTypes";

const getMoviesDataRequest = () => {
	return { type: GET_MOVIES_DATA_REQUEST };
};
const getMoviesDataSuccess = (payload) => {
	return { type: GET_MOVIES_DATA_SUCCESS, payload: payload };
};
const getMoviesDataFailure = () => {
	return { type: GET_MOVIES_DATA_FAILURE };
};
export const getMoviesData = () => (dispatch) => {
	dispatch(getMoviesDataRequest());
	try {
		axios.get("http://localhost:3004/movies").then((res) => {
			console.log(res.data);
			dispatch(getMoviesDataSuccess(res.data));
		});
	} catch (e) {
		dispatch(getMoviesDataFailure());
	}
};
const getActorsDataRequest = () => {
	return { type: GET_ACTORS_DATA_REQUEST };
};
const getActorsDataSuccess = (payload) => {
	return { type: GET_ACTORS_DATA_SUCCESS, payload: payload };
};
const getActorsDataFailure = () => {
	return { type: GET_ACTORS_DATA_FAILURE };
};
export const getActorsData = () => (dispatch) => {
	dispatch(getActorsDataRequest());
	try {
		axios.get("http://localhost:3004/actors").then((res) => {
			console.log(res.data);
			dispatch(getActorsDataSuccess(res.data));
		});
	} catch (e) {
		dispatch(getActorsDataFailure());
	}
};
